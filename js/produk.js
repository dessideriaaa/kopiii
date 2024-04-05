
baris_produk.innerHTML = ""

var data_mentah = {
    "Beans": [
        {
            "nama": "Arabica Gayo",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdYUHR2sj-OYkCCeJ5gtpvdXEuX2djnpRvdnU4xBw6Q&s",
            "harga": "15.000",
            "size": "250 gr",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Robusta Papua",
            "foto": "images/produk/product_espresso.jpg",
            "harga": "27.000",
            "size": "250 gr",
            "link": "https://inaexport.id/uploads/Eksportir_Product/Image/10134/1645046074__5979ca90706f97b3376f9603e9402848-removebg-preview.png"
        },
        {
            "nama": "Arabica Toraja",
            "foto": "images/produk/product_espresso.jpg",
            "harga": "17.000",
            "size": "250 Ml",
            "link": "https://www.foodandwine.com/thmb/XbKXqQvF61Csj9XLs_Nj3xwlwEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Everything-You-Need-To-Know-About-Arabica-Coffee-FT-BLOG0822-2000-127d1551916e45138ea373de75f08138.jpg"
        }
    ],
    "Kopi": [
        {
            "nama": "Kopi Susu",
            "foto": "images/produk/product_kopi_susu.jpg",
            "harga": "20.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Capuchino",
            "foto": "images/produk/product_capuchino.jpg",
            "harga": "26.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Espresso",
            "foto": "images/produk/product_espresso.jpg",
            "harga": "10.000",
            "size": "50 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Latte",
            "foto": "images/produk/product_latte.jpg",
            "harga": "23.000",
            "size": "150 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Non Kopi": [
        {
            "nama": "Es Teh Manis",
            "foto": "https://fajar.co.id/wp-content/uploads/2023/09/IMG_0741.jpg",
            "harga": "10.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Blue Lagoon",
            "foto": "https://i.pinimg.com/736x/cd/4f/07/cd4f07c3cca88beb236d5785ac475d4b.jpg",
            "harga": "28.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Mojito",
            "foto": "https://images.immediate.co.uk/production/volatile/sites/30/2011/07/mojito-mocktail-5adaff2.jpg",
            "harga": "27.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Mineral Water",
            "foto": "https://img.inews.co.id/media/600/files/inews_new/2022/08/23/Screenshot_20220823_185043_Google.jpg",
            "harga": "27.000",
            "size": "500 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
    ],
    "Makanan": [
        {
            "nama": "Pasta",
            "foto": "https://feelgoodfoodie.net/wp-content/uploads/2023/04/Pasta-Bolognese-TIMG.jpg",
            "harga": "38.000",
            "size": "1 Porsi",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "pizza",
            "foto": "https://www.ilovelindsay.com/assets/components/phpthumbof/cache/pizza-with-black-olives-and-pepperoni-small.f82724c758f5a7e1142cf0568b85d580.jpg",
            "harga": "34.000",
            "size": "1 potong",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Nasi Goreng",
            "foto": "https://images.services.kitchenstories.io/snkyf3ApbNhz5Xtz0zZxHxBJSlc=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2455-final-photo-_2.jpg",
            "harga": "37.000",
            "size": "1 Porsi",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Fizh n Chips",
            "foto": "https://api-lotte.hollacode.com/api/static/inspirasi/1702254740848-fish-and-chips.jpg",
            "harga": "42.000",
            "size": "1 Porsi",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },


    ],
    "Dessert": [
        {
            "nama": "Cheesecake",
            "foto": "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg",
            "harga": "28.000",
            "size": "1 Potong",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Sliced Cake",
            "foto": "https://thetizz.files.wordpress.com/2014/04/papas03.jpg",
            "harga": "27.000",
            "size": "1 potong",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Soft Cookies",
            "foto": "https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Homemade-Chocolate-Chip-Cookies-with-Chocolate-Filling.jpg",
            "harga": "27.000",
            "size": "2 Cookies",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Cookie Bomb",
            "foto": "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/05/Chocolate-Chip-Skillet-Cookie-20.jpg",
            "harga": "21.000",
            "size": "1 Cookies",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },

    ]



}


console.log("data mentah:", data_mentah)


function updateSelect() {
    select_kopi.innerHTML = '<option selected disabled>-</option>'
    Object.keys(data_mentah).forEach(function (opsi) {
        select_kopi.innerHTML += '<option value="' + opsi + '">' + opsi + '</option>'
    })
    console.log("Melakukan Update Select")
}
updateSelect();

var data_kopi = []
select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Customer Memilih " + pilihan)
    data_kopi = data_mentah[pilihan]
    console.log("isi data_kopi = ", data_kopi)
    updateTampilan()
}

function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>
                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-Secondary fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <a href="${kopi.link}" class="btn btn-danger w-100"><i class="bi bi-cart4"></i> Beli</a>
                    </div>
                </div>
            </div>`
    })
}



