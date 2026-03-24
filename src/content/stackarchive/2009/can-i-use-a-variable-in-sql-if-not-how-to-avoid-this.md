---
title: "Can I use a variable in SQL? If not, how to avoid this?"
description: "My answer to \"Can I use a variable in SQL? If not, how to avoid this?\" on Stack Overflow"
date: 2009-12-29
author:
  name: Nate Bross
tags:
  - mysql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1976874"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1976862):*

> Can I pull out data by using variable in SQL?
> 
> For example,
> 
> In controller
> 
> ```
> $frontbottom = $this->MProducts -> getFeatureProducts('Front bottom');
> 
> ```
> 
> In model
> 
> ```
> //This does not work.
>   function getFeatureProducts($catname){
>      $data = array();
>      $Q = $this->db->query('SELECT P.*, C.Name AS CatName 
>                    FROM omc_products AS P
>                    LEFT JOIN omc_categories AS C
>                    ON C.id = P.category_id
>                    WHERE C.Name = $catname
>                    AND p.status = "active"
>                    ORDER BY RAND()
>                    ');
>      if ($Q->num_rows() > 0){
>        foreach ($Q->result_array() as $row){
>          $data[] = $row;
>        }
>     }
>     $Q->free_result();    
>     return $data;  
> 
>  }
> 
> ```
> 
> This does not work. Is it because I am using variable?
> 
> The following works. In controller
> 
> ```
> $frontbottom = $this->MProducts -> getFrontbottom();
> 
> ```
> 
> In model
> 
> ```
> function getFrontbottom(){
>      $data = array();
> 
>      $Q = $this->db->query('SELECT P.*, C.Name AS CatName 
>                    FROM omc_products AS P
>                    LEFT JOIN omc_categories AS C
>                    ON C.id = P.category_id
>                    WHERE C.Name = "Front bottom"
>                    AND p.status = "active"
>                    ORDER BY RAND()
>                    ');
>      if ($Q->num_rows() > 0){
>        foreach ($Q->result_array() as $row){
>          $data[] = $row;
>        }
>     }
>     $Q->free_result();    
>     return $data;  
> 
>  }
> 
> ```
> 
> Can I use variable in SQL?
> 
> If not, what is the best way? Do I have make same SQL again and again just changing WHERE clause?

*I posted the following answer:*

Try this:

```
  //This does not work. 
  function getFeatureProducts($catname){ 
     $data = array(); 
     $Q = $this->db->query('SELECT P.*, C.Name AS CatName  
                   FROM omc_products AS P 
                   LEFT JOIN omc_categories AS C 
                   ON C.id = P.category_id 
                   WHERE C.Name = "' . $catname . '"
                   AND p.status = "active" 
                   ORDER BY RAND() 
                   '); 
     if ($Q->num_rows() > 0){ 
       foreach ($Q->result_array() as $row){ 
         $data[] = $row; 
       } 
    } 
    $Q->free_result();     
    return $data;   
 } 

```

The bottom line, is that you need to put the value from the variable into the SQL String. You cannot simply put the name of the variable.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1976874) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
