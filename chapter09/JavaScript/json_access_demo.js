/**
 * โปรแกรมสาธิตการเข้าถึงและค้นหาข้อมูลใน JSON
 * ไฟล์: json_access_demo.js
 * วิธีรัน: node json_access_demo.js
 */

// -----------------------------
// 1) ประกาศตัวแปร JSON Object
// -----------------------------
const data = {
  name: "สมชาย ใจดี",
  age: 30,
  address: {
    street: "123 ถนนสุขุมวิท",
    city: "กรุงเทพมหานคร",
    zip: "10110"
  },
  phoneNumbers: ["081-234-5678", "082-345-6789"]
};

// -----------------------------
// 2) ฟังก์ชันแสดงข้อมูลพื้นฐาน
// -----------------------------
function displayBasicInfo(person) {
  console.log("===== ข้อมูลบุคคล =====");
  console.log("ชื่อ:", person.name);
  console.log("อายุ:", person.age);
  console.log("\n===== ที่อยู่ =====");
  console.log("ถนน:", person.address.street);
  console.log("เมือง:", person.address.city);
  console.log("รหัสไปรษณีย์:", person.address.zip);
}

// -----------------------------
// 3) ฟังก์ชันค้นหาเบอร์โทรศัพท์
// -----------------------------
function findPhoneByPrefix(person, prefix) {
  const foundPhone = person.phoneNumbers.find(number =>
    number.startsWith(prefix)
  );

  if (foundPhone) {
    console.log(`\nพบหมายเลขโทรศัพท์ที่ขึ้นต้นด้วย "${prefix}" คือ:`, foundPhone);
  } else {
    console.log(`\nไม่พบหมายเลขโทรศัพท์ที่ขึ้นต้นด้วย "${prefix}"`);
  }
}

// -----------------------------
// 4) เรียกใช้งานฟังก์ชัน
// -----------------------------
displayBasicInfo(data);
findPhoneByPrefix(data, "082");

// -----------------------------
// 5) แสดงข้อมูลทั้งหมดในรูปแบบ JSON
// -----------------------------
console.log("\n===== JSON ทั้งหมด (Pretty Print) =====");
console.log(JSON.stringify(data, null, 2));
