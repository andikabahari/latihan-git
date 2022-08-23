# latihan-git

Berikut ini adalah penjelasan singkat mengenai fitur A, fitur B, dan alur penangan branch antara kedua fitur tersebut.

## Fitur A

Obyek `Human` mendapat penambahan informasi:

- `age` dengan tipe data `string`
- `canSwim` dengan tipe data `boolean`.

## Fitur B

Obyek `Human` mendapat penambahan informasi:

- `age` dengan tipe data `number`
- `canSing` dengan tipe data `boolean`.

## Alur Penanganan Branch

Branch `featureA` dan `featureB` keduanya berasal dari `development`.

Pertama, branch `development` digabungkan (merge) dengan `featureA`. Setelah itu, branch `development` digabungkan (merge) dengan `featureB`, kemudian terjadi konflik karena terdapat beberapa baris kode yang diubah secara bersamaan oleh `featureA` dan `featureB`. Konflik kemudian diatasi, sehingga branch `development` memiliki fitur A dan fitur B. Terakhir, branch `master` digabungkan (merge) dengan `development`.

Untuk lebih detail, silakan cek riwayat commit pada branch `master`.
