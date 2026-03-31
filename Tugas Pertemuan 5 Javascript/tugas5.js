// **Data Produk** [cite: 12]
// Membuat list data produk awal minimal 5 [cite: 5, 16]
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headphones", harga: 1500000 },
  { id: 4, nama: "Monitor", harga: 2500000 },
  { id: 5, nama: "Keyboard Mechanical", harga: 800000 }
];

// **Menambahkan Produk dengan Spread Operator** [cite: 20]
// Fungsi untuk menambah produk baru ke dalam array [cite: 6, 21]
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  // Menggunakan Spread Operator untuk menggabungkan data lama dengan yang baru 
  produkList = [...produkList, produkBaru];
  console.log(`--- Produk "${nama}" berhasil ditambahkan ---`);
}

// **Menghapus Produk dengan Rest Parameter** 
// Fungsi untuk menghapus produk berdasarkan ID [cite: 7, 23]
function hapusProduk(idHapus) {
  // Filter akan membuat array baru tanpa ID yang dipilih
  produkList = produkList.filter(produk => produk.id !== idHapus);
  console.log(`--- Produk dengan ID ${idHapus} telah dihapus ---`);
}

// **Menampilkan Produk dengan Destructuring** [cite: 25]
// Fungsi untuk menampilkan semua data ke konsol [cite: 8, 26]
function tampilkanProduk() {
  console.log("Daftar Produk Saat Ini:");
  produkList.forEach((produk) => {
    // Menggunakan Destructuring untuk mengambil properti objek 
    const { id, nama, harga } = produk;
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga.toLocaleString()}`);
  });
  console.log("----------------------------");
}

// **Eksekusi Sesuai Contoh** [cite: 27, 28, 29, 30, 31, 32]

// 1. Menampilkan data awal
tampilkanProduk(); 

// 2. Menambah produk baru (Tablet)
tambahProduk(6, "Tablet", 7000000); 
tampilkanProduk();

// 3. Menghapus produk dengan ID 2 (Smartphone)
hapusProduk(2); 
tampilkanProduk();