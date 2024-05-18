# Challenge 5 - SYNRGY Academy
- ERD
- Endpoint

## Entity Relationship  Diagram 
```
Table cars {
  id integer primary key,
  nama varchar,
  harga integer,
  image varchar,
  created_at timestamp,
  updated_at timestamp
}
```

```
Table users {
  id integer primary key,
  nama varchar,
  email varchar,
  password varchar,
  confPassword varchar,
  created_at timestamp,
  updated_at timestamp
}
```
## Gambar ERD
![ERD](https://github.com/BintangRP/24001122-synrgy7-bin-dashboard-ch5/blob/main/ERD.png)


## Endpoint
- [GET] localhost:3000/admin/cars - Get All Cars
- [GET] localhost:3000/admin/cars/create - Create New Car Page
- [POST] localhost:3000/admin/cars/ - Store New Car
- [GET] localhost:3000/admin/cars/edit/:id - Edit Car by id Page
- [PUT] localhost:3000/admin/cars/edit/:id - Update Car by id
- [DELETE] localhost:3000/admin/cars/:id - Delete Car by id
