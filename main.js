// دالة إضافة للمفضلة
function toggleFavorite(button) {
    const icon = button.querySelector('i');
    if (icon.classList.contains('bi-heart')) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
        icon.style.color = 'red';
    } else {
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
        icon.style.color = '#666';
    }
}

// دالة جلب الفوتر
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(r => r.text())
        .then(d => {
            document.getElementById('footer-container').innerHTML = d;
        });
});

const productModal = document.getElementById('productModal');

productModal.addEventListener('show.bs.modal', function (event) {
    const img = event.relatedTarget; // الصورة التي ضغطتِ عليها

    // جلب البيانات من الصورة
    document.getElementById('modalName').innerText = img.getAttribute('data-name');
    document.getElementById('modalDesc').innerText = img.getAttribute('data-desc');
    document.getElementById('modalCode').innerText = img.getAttribute('data-code');
    document.getElementById('modalOrigin').innerText = img.getAttribute('data-origin');
    document.getElementById('modalImg').src = img.src; // جلب رابط الصورة
});



// مصفوفة لتخزين المنتجات في السلة
let cart = [];

// الدالة التي يتم استدعاؤها عند الضغط على الزر
function addToCart() {
    // 1. استخراج بيانات المنتج من الكارت الذي ضغطتِ عليه
    // (نستخدم الـ 'this' للإشارة للزر الذي ضغطتِ عليه)
    let card = event.target.closest('.card'); // نبحث عن أقرب كارت للزر
    let name = card.querySelector('.fw-bold').innerText; // جلب الاسم
    let price = card.querySelector('.text-danger').innerText; // جلب السعر

    // 2. إنشاء كائن للمنتج
    let product = {
        name: name,
        price: price
    };

    // 3. إضافة المنتج للمصفوفة
    cart.push(product);

    // 4. إظهار رسالة تأكيد
    alert("تمت إضافة " + name + " إلى السلة! ✅");
    console.log("السلة الآن تحتوي على:", cart);
}