/**
 * โปรแกรมสาธิตการทำงานแบบ Asynchronous ด้วย Callback
 * ไฟล์: callback_async_demo.js
 * วิธีรัน: node callback_async_demo.js
 */

// --------------------------------------
// 1) ฟังก์ชันจำลองการโหลดข้อมูล
// --------------------------------------
function downloadData(callback) {
  console.log("กำลังดาวน์โหลดข้อมูล...");

  // จำลองการโหลดข้อมูลใช้เวลา 2 วินาที
  setTimeout(() => {
    console.log("ข้อมูลถูกโหลดแล้ว");
    
    // ส่งค่าข้อมูลกลับผ่าน callback
    const result = {
      status: "success",
      message: "ดาวน์โหลดข้อมูลเรียบร้อย"
    };

    callback(result);
  }, 2000);
}

// --------------------------------------
// 2) เริ่มต้นโปรแกรม
// --------------------------------------
console.log("เริ่มต้นโปรแกรม");

// เรียกใช้งานฟังก์ชัน downloadData()
downloadData((response) => {
  console.log("สถานะ:", response.status);
  console.log("ข้อความ:", response.message);
  console.log("โหลดข้อมูลสำเร็จ");
});

console.log("โปรแกรมยังทำงานต่อได้โดยไม่รอข้อมูล");
