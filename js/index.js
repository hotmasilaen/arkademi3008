    const namaSiswa = ['Nia', 'Farhan', 'Juni', 'Putri']
    let alamat = 'Jakarta'
    alamat = 'Lampung'
    var jurusan = 'Fisika';
    jurusan = 'Biologi'

    const today = new Date();
    console.log(today);
    // alert(today);
    document.getElementById('root').innerHTML = today

    const value = [12, 5, 7, 12, 1]

    console.log(typeof value);
    const filterValue = value.filter((item) => item < 10)


    console.log(filterValue);

 

    function hitungDiskon(hargaBarang, persen) {
        let result = hargaBarang - (hargaBarang * persen / 100)
        return result
    }

    function hitungTotal() {
        const namaBarang1 = document.getElementById('nama1').value
        const namaBarang = document.getElementById('nama').value

        const errNamaBarang1 = document.getElementById('errNamaBarang1')
        const errNamaBarang = document.getElementById('errNamaBarang')

        const hargaBarang1 = Number(document.getElementById('harga1').value)
        const qty = Number(document.getElementById('qty').value)
        const hargaBarang = Number(document.getElementById('harga').value)
        const qty1 = Number(document.getElementById('qty1').value)
        const diskon = Number(document.getElementById('diskon').value)
        const diskon1 = Number(document.getElementById('diskon1').value)

        if (namaBarang1 === '') {
            errNamaBarang1.innerHTML = 'Nama tidak boleh kosong.'
            errNamaBarang1.style.color = 'red'
            errNamaBarang1.style.margin = 0
        } else {
            errNamaBarang1.style.display = 'none'
        }

        if (namaBarang === '') {
            errNamaBarang.innerHTML = 'Nama tidak boleh kosong.'
            errNamaBarang.style.color = 'red'
            errNamaBarang.style.margin = 0
        } else {
            errNamaBarang.style.display = 'none'
        }

        const bayarBarang1 = diskon1 !== 0 ? hitungDiskon(hargaBarang1, diskon1) : hargaBarang1
        const bayarBarang = diskon !== 0 ? hitungDiskon(hargaBarang, diskon) : hargaBarang
        
        const result = (bayarBarang * qty) + (bayarBarang1 * qty1)
        console.log(namaBarang1, namaBarang);

        document.getElementById('total').innerHTML = 'Total bayar: Rp. ' + result
        document.getElementById('listBarang').innerHTML = namaBarang1 
        document.getElementById('listBarang1').innerHTML = namaBarang
    }

    function payCash() {
        const cashBtn = document.getElementById('lunas')
        cashBtn.style.display = 'block'
    }
