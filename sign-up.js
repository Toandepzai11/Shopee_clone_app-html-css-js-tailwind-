function loginForm() {
    var sdt = document.getElementById("sdt").value
    let b = sdt.toString()
    let c = b.split('')

    if (sdt.trim() === "") {
        alert("Vui lòng nhập số điện thoại!");
        return false;
    } else if (c[0] == 0 && c.length == 10) { 
        // Thay thế bằng thông tin đăng nhập thực tế
        alert("Đăng kí thành công!");
        // Chuyển hướng đến trang chủ (ở đây là "trang chủ.html")
        // window.location.href = 'index.html';
        window.location.assign("index.html")
        return false;
    } else {
        alert("Vui lòng nhập số điện thoại hợp lệ!")
        return false
    }
}
// $(document).ready(function() {
//     var users = [];

//     $('#btn-next-up').click(function(e) {
//         e.preventDefault();

//         var phoneNumber = $('#sdt').val();

//         var user = {
//             phoneNumber: phoneNumber
//         };

//         users.push(user);

//         // Save the users array to a database using AJAX
//         $.ajax({
//             type: 'POST',
//             url: '/save-users',
//             data: { users: users },
//             success: function(response) {
//                 console.log('Users saved successfully');
//             },
//             error: function(error) {
//                 console.log('Error saving users:', error);
//             }
//         });
//     });

//     // Load the users array from the database using AJAX
//     $.ajax({
//         type: 'GET',
//         url: '/load-users',
//         success: function(response) {
//             users = response;
//             console.log('Users loaded successfully');
//         },
//         error: function(error) {
//             console.log('Error loading users:', error);
//         }
//     });
// });

// $(document).ready(function() {
//     $('#btn-next-up').click(function(e) {
//       e.preventDefault();
//       var phone = $('#sdt').val();
//       if (phone) {
//         $.ajax({
//           type: 'POST',
//           url: '/php/signup.php', // server-side script to handle signup
//           data: { phone: phone },
//           success: function(response) {
//             console.log('Phone number saved:', response);
//             // Redirect user to sign-in page or show success message
//           },
//           error: function(xhr, status, error) {
//             console.error('Error saving phone number:', error);
//             // Show error message to user
//           }
//         });
//       } else {
//         console.error('Phone number is required');
//         // Show error message to user
//       }
//     });
//   });