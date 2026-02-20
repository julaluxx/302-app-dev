/**
 * โปรแกรมสาธิตการทำงานแบบ Asynchronous ด้วย Promise
 * ไฟล์: promise_async_demo.js
 * วิธีรัน: node promise_async_demo.js
 */

// --------------------------------------
// 1) ฟังก์ชันจำลองการโหลดข้อมูล
// --------------------------------------
function downloadData() {
  return new Promise((resolve, reject) => {
    console.log("กำลังดาวน์โหลดข้อมูล...");

    // จำลองการโหลดข้อมูลใช้เวลา 2 วินาที
    setTimeout(() => {

      const success = true; // เปลี่ยนเป็น false เพื่อทดสอบกรณี error

      if (success) {
        console.log("ข้อมูลถูกโหลดแล้ว");

        resolve({
          status: "success",
          message: "ดาวน์โหลดข้อมูลเรียบร้อย"
        });

      } else {
        reject(new Error("เกิดข้อผิดพลาดในการโหลดข้อมูล"));
      }

    }, 2000);
  });
}

// --------------------------------------
// 2) เริ่มต้นโปรแกรม
// --------------------------------------
console.log("เริ่มต้นโปรแกรม");

// เรียกใช้งาน Promise
downloadData()
  .then((response) => {
    console.log("สถานะ:", response.status);
    console.log("ข้อความ:", response.message);
    console.log("โหลดข้อมูลสำเร็จ");
  })
  .catch((error) => {
    console.error("เกิดข้อผิดพลาด:", error.message);
  })
  .finally(() => {
    console.log("กระบวนการทำงานเสร็จสิ้น");
  });

console.log("โปรแกรมยังทำงานต่อได้โดยไม่รอข้อมูล");
