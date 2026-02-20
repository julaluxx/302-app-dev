/**
 * โปรแกรมสาธิตการทำงานแบบ Asynchronous ด้วย async/await
 * ไฟล์: async_await_demo.js
 * วิธีรัน: node async_await_demo.js
 */

// --------------------------------------
// 1) ฟังก์ชันจำลองการโหลดข้อมูล
// --------------------------------------
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const success = true; // เปลี่ยนเป็น false เพื่อทดสอบกรณี error

      if (success) {
        resolve({
          status: "success",
          message: "ข้อมูลถูกโหลดเรียบร้อย"
        });
      } else {
        reject(new Error("เกิดข้อผิดพลาดในการโหลดข้อมูล"));
      }

    }, 2000);
  });
}

// --------------------------------------
// 2) ฟังก์ชันหลักใช้ async/await
// --------------------------------------
async function getData() {
  try {
    console.log("กำลังโหลดข้อมูล...");

    const result = await fetchData();

    console.log("สถานะ:", result.status);
    console.log("ข้อความ:", result.message);
    console.log("โหลดข้อมูลสำเร็จ!");

  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
  } finally {
    console.log("กระบวนการทำงานเสร็จสิ้น");
  }
}

// --------------------------------------
// 3) เริ่มต้นโปรแกรม
// --------------------------------------
console.log("เริ่มต้นโปรแกรม");
getData();
console.log("โปรแกรมยังทำงานต่อได้โดยไม่รอข้อมูล");
