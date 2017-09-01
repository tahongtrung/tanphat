$(function() {
    /*Validator cho thẻ input trong trang đăng nhập (customize từ bootstrap)*/
	var elements = $('.form-control');
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                switch (e.srcElement.id) {
                    case "tenhaisan":
                        e.target.setCustomValidity("Tên hải sản không được bỏ trống!");
                        break;
                    case "giamuavao":
                        e.target.setCustomValidity("Giá mua vào không được bỏ trống");
                        break;
                 	case "giabanra":
                        e.target.setCustomValidity("Giá bán ra không được bỏ trống");
                        break;
                    case "loai":
                        e.target.setCustomValidity("Loại không được bỏ trống");
                        break;
                    case "username":
                        e.target.setCustomValidity("Tên đăng nhập không được bỏ trống!");
                        break;
                    case "password":
                        e.target.setCustomValidity("Mật khẩu không được bỏ trống");
                        break;
                }
            }
        };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
})