# HacktivGAG

⏰ estimated time: ~180 minutes

[Link Demo](https://hacktivgag.herokuapp.com/)

Buatlah sebuah website bernama `HacktivGAG` dimana pengguna dapat saling berbagi `Meme` (/miːm/ _MEEM_). Baca dengan teliti spesifikasi yang tertulis.

Gunakan nama database: `livecodep1w4`

## Release 0

Buatlah migration dan model untuk:

1. Category
- name (string)
- description (string)

2. Meme
- author (string)
- title (string)
- imageURL (string)
- status (string)

## Release 1

Relasi antara `Category` dan `Meme` adalah sebagai berikut:

- 1 `Category` bisa memiliki banyak `Meme`
- 1 `Meme` hanya memiliki 1 `Category`

Buatlah migration baru untuk menambahkan kolom yang dibutuhkan sehingga dapat memenuhi kriteria diatas.

## Release 2

Buatlah seeding untuk melakukan input data `Category` berdasarkan data berikut:

| name       | description                   |
|------------|-------------------------------|
| Animals    | It's so fluffy I'm gonna die! |
| Technology | Tech, programming, IT related |
| Random     | Why so serious                |

## Release 3

Buatlah routing yang **HARUS** mengikuti format berikut:

| Method | Route             | Description                                                                                 |
|--------|-------------------|---------------------------------------------------------------------------------------------|
| GET    | /                 | Menampilkan seluruh `Meme` dengan `status` _Published_                                      |
| GET    | /categories       | Menampilkan seluruh `Category`                                                              |
| GET    | /memes/add        | Menampilkan form untuk menambahkan `Meme`                                                   |
| POST   | /memes/add        | Menambahkan data `Meme`                                                                     |
| GET    | /memes/:id/report | Melakukan pelaporan terhadap `Meme` dan update `status` menjadi _Reported_                  |
| GET    | /memes/reported   | Menampilkan seluruh data `Meme` yang telah dilaporkan                                       |
| GET    | /memes/:id/delete | Menghapus `Meme` yang telah dilaporkan                                                      |

## Release 4

Pada routing `GET /memes/add` tampilkanlah form untuk menambahkan `Meme` baru ke dalam database dengan ketentuan sebagai berikut:

- Input type `author` adalah text
- Input type `title` adalah text
- Input type `imageURL` adalah text
- Input type `CategoryId` adalah dropdown/select option, dimana valuenya diambil dari data `Category` yang telah diseed sebelumnya
- Button `Submit` yang digunakan untuk melakukan submit data ke `POST /memes/add`

## Release 5

Pada routing `POST /memes/add` buatlah validasi pada **server** dengan ketentuan sebagai berikut:

- Semua input harus diisi
- Input `imageURL` harus diisi dengan format URL

Jika validasi tidak terpenuhi tampilkanlah error message (diperbolehkan menggunakan res.send selama error message yang ditampilkan jelas dan sesuai dengan error yang terjadi).

Sebelum menyimpan data ke database, buatlah hooks untuk membuat kolom `status` memiliki value _Published_.

Setelah data berhasil tersimpan di database, halaman akan berpindah ke routing `GET /`

<details>
	<summary><b>NOTE</b>: untuk imageURL bisa gunakan data berikut:</summary>

	- Animals
	  http://arah.in/memes-1
	  http://arah.in/memes-2
	  http://arah.in/memes-3

	- Technology
	  http://arah.in/memes-4
	  http://arah.in/memes-5
	  http://arah.in/memes-6

	- Random
	  http://arah.in/memes-7
	  http://arah.in/memes-8
	  http://arah.in/memes-9
	
</details>

## Release 6

Pada routing `GET /categories` tampilkanlah seluruh `Category` dalam bentuk table yang memiliki kolom-kolom sebagai berikut:

- Id
- Name
- Description
- Total Memes

Kolom Total Memes menampilkan banyaknya `Meme` pada `Category` tanpa memperhatikan `status` dari `Meme`.

## Release 7

Pada routing `GET /` tampilkanlah seluruh `Meme` dengan `status` _Published_ dalam bentuk table yang memiliki kolom-kolom dan ketentuan sebagai berikut:

- Id
- Image
- Caption
- Category
- Published
- Action

Pada kolom Image gunakan tag html [img](https://www.w3schools.com/html/html_images.asp) untuk menampilkan image berdasarkan `imageURL`.

Kolom Caption menampilkan kombinasi `title` dan `author` dengan format `<title> by <author>` (gunakan instance method).

Kolom Category menampilkan `name` dari `Category`.

Kolom Published akan dijelaskan pada release berikutnya, untuk saat ini bisa dilewati dulu.

Kolom Action menampilkan link `Report` yang mengarah ke routing `GET /memes/:id/report`

**NOTE**: Data yang ditampilkan harus berurut dari `Meme` yang terakhir ditambahkan.

## Release 8

Pada routing `GET /memes/:id/report` ubahlah `status` pada `Meme` terkait menjadi _Reported_. Setelah data berhasil diubah, halaman akan berpindah ke halaman routing `GET /memes/reported`

## Release 9

Pada routing `GET /memes/reported` tampilkanlah seluruh `Meme` dengan `status` _Reported_ dalam bentuk table yang memiliki kolom-kolom seperti pada `GET /` yaitu Id, Image, Caption, Category, Published, dan Action. Namun, kolom Action pada routing ini menampilkan link `Delete` yang mengarah ke routing `GET /memes/:id/delete`

## Release 10

Pada routing `GET /memes/:id/delete` hapuslah data `Meme` terkait dari database. Setelah data berhasil dihapus, halaman akan kembali ke routing `GET /memes/reported`

## Release 11

Pada routing `GET /` dan `GET /memes/reported` kolom Published pada table digunakan untuk menampilkan kapan `Meme` dibuat dengan format `<mm> minutes ago` atau `<hh> hours ago` berdasarkan `createdAt`. Buatlah fitur ini dengan menggunakan helper.

Contoh: `createdAt` memiliki value _2020-05-01 10:00:00_
- Jika waktu saat ini adalah _2020-05-01 10:12:00_, maka tampilkan _12 minutes ago_
- Jika waktu saat ini adalah _2020-05-01 13:30:00_, maka tampilkan _3 hours ago_

**HINT**: gunakan `new Date()` untuk mendapatkan waktu saat ini.