---
title: "How can I shake relational database thinking for designing an azure table storage datastore?"
description: "A question I asked on Stack Overflow"
date: 2012-08-01
author:
  name: Nate Bross
tags:
  - c#
  - azure
  - azure-storage
  - azure-table-storage
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/11767055"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/11767055):*

I have been trying to get a good grasp of Azure Table storage for a little while now, and while I understand generally how it works I am really struggling to shake my relational database thinking. I usually learn best by example, so I'm wondering if someone can help me out. I'm going to outline a simple setup for how I would solve a problem using a relational database, can someone help guide me to converting it to use Azure Table storage?

Lets say that I have simple note taking app, it has users and each user can have as many notes as they want, and each note can have as many users (owners or viewers) as it needs. If I were going to deploy this using a relational database I would likely deploy it as follows:

For the database, I'd start with something like this:

```
CREATE TABLE [dbo].[Users](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [Username] [nvarchar](20) NOT NULL)

CREATE TABLE [dbo].[UsersNotes](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [UserID] [int] NOT NULL,
    [NoteID] [int] NOT NULL)

CREATE TABLE [dbo].[Notes](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [NoteData] [nvarchar](max) NULL)        

```

I would then setup a relationship between `Users.ID and UsersNotes.UserID` as well as `Notes.ID and UsersNotes.NoteID` with constraints to enforce referential integrity.

For the application, I would have an ORM generate some entities with matching name properties for each of these, and I'd probably call it a day:

```
public class Users
{
    public int ID { get; set; }
    public String Username { get; set; }
}
// and so on and so forth

```

I realize that this design is fully dependent on the relational database, and what I'm looking for is some advise on how to shake this train of thought to use Azure Table storage, or any other non-relational data storage techniques.

Lets also assume for the sake of argument that I've installed the Azure SDK, and have played around with it, but my working knowledge of using the SDK is limited, I'd rather not focus on that, but rather what a good solution to the above would look like. A good starting point will help make the SDK make sense to me, since I'll have a point of reference.

For the sake of completeness, lets say that

*   Note data will change frequently when first created, and taper off over time
*   Users will have many notes, and notes may have multiple users (not concurrent, just viewers)
*   I expect fairly few users (low hundreds), but I expect a fair number of notes (low hundreds, per user)
*   I expect to query against `Username` the most, and then show the notes the user has access to
*   I also expect when viewing a Note, to show the other users with access to that note, a reverse lookup

---

> [hocho answered](https://stackoverflow.com/a/11771938) (5 upvotes):
>
> Some thoughts ...
> 
> 1.  Think of distinct entities in their entirety, and abstain from decomposing them further using any normalization techniques.
> 2.  Come up with a single identifier for each entity, which if indexed on, would allow both an exact key search, as well as a range key search to match.
> 3.  Split the identifier into 2 segments for Azure table storage scalability needs. How to split well, is a separate topic on its own but usually splitting across well-defined natural segments works sufficient well.
> 
> In your example, the two entities would be User and Note.
> 
> A UserId would be sufficient to uniquely identify a User. A range search on a user may not be really useful. The user id could be any fixed length value here.
> 
> A UserId + NoteId would be sufficient to uniquely identify a note. The note id could be something like a date/timestamp + a GUID for uniqueness. Such a key, in combination with the UserId would uniquely identify the note as well as allow a range search on all the user’s notes or a user’s notes over a given time period.
> 
> So if UserId = “ABCD”, NoteId could be “20120801- 00f64829-6044-4fbb-8b4e-ae82ae15096e”.
> 
> You could store both entities in the same or in different tables. Here are some different approaches …
> 
> If each entity has its own table,
> 
> *   For a User Partition Key could be “ABCD” and Row Key could be actually anything and you search only on the partition key.
>     
> *   Or Partition Key could be “AB” and Row Key could be “CD”.
>     
>     Both the above would scale well for large number of users.
>     
> *   Or Partition Key could be “\*” and Row Key could be “ABCD”. This would work quite well for a smaller set of users and you could put both users and notes in the same table.
>     
> 
> For a Note
> 
> *   Partition Key could be “ABCD” and Row Key could be “20120801- 00f64829-6044-4fbb-8b4e-ae82ae15096e”
>     
> *   Range search here could be
>     
>     *   On PartitionKey = “ABCD” to get all the notes for a user.
>     *   On PartitionKey = “ABCD” and RowKey >=“20120801” and RowKey <= “20120901” to get notes within a date range.
> 
> **UPDATE**
> 
> I misread your question and assumed only a one to many relationship between users and notes. Since there is a many to many relationship would need 4 entities to model, unless you do not mind duplication. (If notes are short and immutable, they can be duplicated and you would not have to model joins).
> 
> More than 1 entity can be placed in a single table if the keys are in different key ranges and can be easily distinguished. Although, in practice this is not common unless there is a specific need, usually transactional writes to the same partition (not applicable there).
> 
> So a single table schema could look like this. For multiple tables, the Partition Key prefix could be dropped.
> 
> *   You could also model this in 3 tables, one for User, one for Notes and one for the relationships in both directions.
> *   You could also model this partially in SQL and partially in Azure storage. Notes and User data in blobs or tables and relationships in SQL.
> 
> .
> 
> ```
> Entity        Partition Key              Row Key            
> User          “U” + UserId      
> Note          “N” + NoteId(Date)         NodeId(GUID)
> User Note     “X“  + UserId              NoteId(Date+GUID)
> Note User     “Y“  + NoteId(Date+GUID)   UserId    
> 
> ```
> 
> These are some alternatives and you will want to determine which fits your data and your needs best.
> 
> **YET ANOTHER UPDATE**  
> Actually 3 entities should be enough with the Note in the UserNote entity.
> 
> If UserId = GUID  
> And NoteId = Date+GUID
> 
> ```
> Entity      Partition Key  Row Key             Note  User           
> User        UserId      
> User Note   UserId         NoteId(Date+GUID)   Note          (Contains Note and can query for all notes for a user).
> Note User   NoteId(Date)   NodeId(GUID)              UserId  (Can query for all Users of a note. Join on ‘User Note’ to get note.)  
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): I agree, there are lots of books and online material. None of them answer my specifc question, thus my post here.

**Nate** (2 upvotes): @Blam I am interested in a learning exercise as well as cost.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/11767055) — 9 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
