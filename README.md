# Learn Node js

## Chapter 1: Introduction to Nodejs and NPM

### 1. What is Node js and Why use it

### 2. Running JavaScript outside the browser

### 3. Reading and Writing File

### 4. Blocking and Non-Blocking _ Asynchronous

### 5. Reading and Writing File Asynchronous

### 6. Creating a simple web server

### 7. Routing

### 8. Introduction to NPM

### 9. Types of Packages

### 10. Setting up Pretter

## Chapter 2: Introduction to Back-End Web

## Chapter 3: How Nodejs Work

## Chapter 4: Asynchronous JS

## Chapter 5: Express, Let;s Start Building the Natour project
### 1. What is Express

### 2. Installing Postman

### 3. Setting Express and Basic Routing

### 4. APIs and RESTful API Design

### 5. Handing GET Request

### 6. Handing POST Request

### 7. Responding to URL Parameter

### 8. Handing PATCH Request

### 9. Handing DELETE Request

### 10. Refactoring Our Routes

### 11. Middleware and Request-Respone

### 12. Creating Our Own Middleware

### 13. Using 3rd-Party Middleware

### 14. Implementing the users Routes

### 15. Creating and Mounting Multiple Routes

### 16. Better File Structure

### 17. Param Middleware
  > Dùng nó để lấy các param do Request gửi lên chuyển các param này cho Middleware xử lý <br>
  `router.param(<param>, (req, res, next, val) => {}`
### 18. Chaing Multiple Middleware Function 
### 19. Serving Static File
  > **Static files** - tập tin tĩnh là các file HTML, CSS, Image, Javascript. Các file tĩnh này có nội dung không thay đổi khi người dùng Request tới nó => vì vậy nó không cần phải tạo bất cứ yêu cầu nào thông quan MVC Middleware mà chỉ cần trả về nôi dung là ok. <br>
  * Cú phát của nó: `express.static(root, [option])`<br>
  * Trong đó: **root** thông thường là truyền vào là đường dẫn đến thư mục chứa các static file; **option** là các đối só tùy chọn
### 20. Environment Variables
  - Biến môi trường là một giá trị có thể ảnh hưởng đến cách các quy trình đang chạy sẽ hoạt động trên máy tính. Chúng là một phần của môi trường mà một tiến trình chạy.
  - Sử dụng biến môi trường để:<br>
    - Giấu đi các thông tin bí mật (username, password) trong file `.env`, không được commit thông qua git
    - Tận dụng để chuyển qua lại giữa các môt trường ứng với các mục đích khác nhau (prod, dev, test)
  - `process.evn` là 1 object chứa tất cả các thông tin về môi trường (máy tính) mà Node.js đang chạy để xem được các thông tin đó mình sử dùng dòng lệnh `console.log(process.env)` vào file khởi nguồn của ứng dụng<br>
  - Để thêm dữ liệu vào `process.env` thì:<br>
    - Đầu tiên mình tạo 1 file có phần mở rộng là `.env` đặt trong thư mục gốc của app
    - Cài package `dotenv` bằng lệnh `npm i dotenv`
    - Thêm dòng `require('dotenv').config({path: '<đường dẫn đến file .env'})`
### 21. Setting up ESLint +  Prettier in VS Code
  `npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev`
  
## Introduction to MongoDB
### 1. What the MongDB
- MongoDB là một document database với khả năng mở rộng (scalability) và sự linh hoạt (flexibility)
  - Document based: MongoDB lưu dữ liệu dạng documents (NoSQL)
  - Scalable: rất dễ dàng để phân phối dữ liệu trên nhiều máy khi người dùng và lượng dữ liệu tăng lên
  - Flexible: không cần có **schema**, vì vậy mỗi document có số lượng và loại trường khác nhau
  - Performant: mô hình dữ liệu nhúng, lập chỉ mục, phân tích, tài liệu linh hoạt, sao chép bản địa
  - Miễn phí và open-source
- BSON là mã hóa nhị phân của các tài liệu giống như JSON mà MongoDB ѕử dụng khi lưu trữ tài liệu trong các bộ ѕưu tập. Nó bổ ѕung hỗ trợ cho các loại dữ liệu như Ngàу ᴠà nhị phân không được hỗ trợ trong JSON
### 2. Installing MongoDB on Windows
- Vào trang chủ của MongDB `https://www.mongodb.com/` tại tab `Products` chọn `Community Server`
- Sau đó chọn version và tải về. Nên chọn version `4.` để thao tác được trên cmd
- Sau khi tải thành công tiến hành install vào máy 
- Để chạy Mongo DB Server tại `C:\Program Files\MongoDB\Server\4.0\bin` chạy file `mongod.exe` 
- Để dễ dàng sử dụng trên cmd chúng ta nên cài đặt biến môi trường cho nó
- Sau đó chạy file `mongo.exe` đế có thể thao tác với database
### 3. Một số lệnh cơ bản trong MongoDB khi sử dụng Cmd
`use <DatabaseName>` => Để tạo database trong MongoDB <br>
`db` => xem database đang sử dụng <br>
`show dbs` => xem tất cả database trên hệ thống <br>
`db.<collectionName>.insertOne({})` => tạo một document trong collection <br>
`db.<collectionName>.insertMany([{}, {}, . . .])` => tạo nhiều document trong collection <br>
- Các câu lệnh truy vấn
`db.<collectionName>.find()` => lấy tất cả dữ liệu trong collection <br>
`db.<collectionName>.find(<codition>)` => lấy dữ liệu theo điều kiện truyền vào <br>
```
  **Cú pháp:**
  Bằng(Equality)                        |     { key: value }
  Nhỏ hơn (Less Than)                   |     { key: {$lt: value} }
  Nhỏ hơn bằng (Less Than Equals)       |     { key: {$lte: value} }
  Lơn hơn (Greater Than)                |     { key: {$gt: value} }
  Lớn hơn bằng (Greater Than Equals)    |     { key: {$gte: value} }
  Khác (Not Equals)                     |     { key: {$ne: value} }
  Trong (In)                            |     { key: {$in: [value1, value2,..]} }
  Không Thuộc (Not In)                  |     { key: {$nin: [value1, value2,..]} }
  Hoặc (OR)                             |     { $or: [ {key: {<condition>}}, {key: {<condition>}} ] }
 ```
