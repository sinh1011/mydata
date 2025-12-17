let arr = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function(arr) {
    let zeros = 0;

    // B1: Đếm tổng số số 0
    for (let x of arr) {
        if (x === 0) zeros++;
    }

    let n = arr.length;

    // B2: Duyệt ngược
    // SỬA 1: i >= 0 chứ không phải i <= 0
    for (let i = n - 1; i >= 0; i--) {
        
        // Nếu số hiện tại là số 0
        if (arr[i] === 0) {
            // Vị trí cho số 0 bản sao (bị đẩy ra xa nhất)
            let vitri_ban_sao = i + zeros;
            
            // SỬA 2: Chỉ ghi nếu vị trí nằm trong mảng
            if (vitri_ban_sao < n) {
                arr[vitri_ban_sao] = 0;
            }
            
            // Giảm zero đi vì ta vừa xử lý xong 1 lần đẩy
            zeros--; 
            
            // Vị trí cho số 0 bản chính
            let vitri_ban_chinh = i + zeros;
            if (vitri_ban_chinh < n) {
                arr[vitri_ban_chinh] = 0;
            }

        } else {
            // Nếu là số thường (1, 2, 3...)
            let vitri_moi = i + zeros;
            
            // SỬA 3: Chỉ ghi nếu vị trí nằm trong mảng
            if (vitri_moi < n) {
                arr[vitri_moi] = arr[i];
            }
        }
    }
};

duplicateZeros(arr);
console.log(arr); 
// Kết quả mong đợi: [1, 0, 0, 2, 3, 0, 0, 4]