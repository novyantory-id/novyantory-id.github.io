const menuIcon = document.querySelector("#menu-icon");
const menuIconX = document.querySelector("#menu-icon-x");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
  menuIconX.style.display = "inline-block";
  menuIcon.style.display = "none";
};
menuIconX.onclick = () => {
  navLinks.classList.remove("active");
  menuIcon.style.display = "inline-block";
  menuIconX.style.display = "none";
};

function hitungUmur(tanggalLahir) {
  let lahir = new Date(tanggalLahir);
  let sekarang = new Date();
  let umur = sekarang.getFullYear() - lahir.getFullYear();

  let bulanSekarang = sekarang.getMonth();
  let hariSekarang = sekarang.getDate();
  let bulanLahir = lahir.getMonth();
  let hariLahir = lahir.getDate();

  if (
    bulanSekarang < bulanLahir ||
    (bulanSekarang === bulanLahir && hariSekarang < hariLahir)
  ) {
    umur--;
  }

  return umur;
}
document.getElementById("umur").textContent = hitungUmur("1997-07-29");

function inputCV() {
  let contentInputCV = document.getElementById("content-input-cv");
  let button = document.querySelector(".btn2");

  let isVisible = contentInputCV.classList.contains("show");

  if (isVisible) {
    contentInputCV.classList.remove("show");
    setTimeout(() => (contentInputCV.style.display = "none"), 300);
    button.textContent = "Buat Sekarang";
    // button.setAttribute("aria-expanded", "false");
  } else {
    contentInputCV.style.display = "block";
    setTimeout(() => contentInputCV.classList.add("show"), 10);
    button.textContent = "Sembunyikan Form";
  }
}

function sendEmail() {
  let userEmail = document.getElementById("userEmail");
  let myEmail = "bolongsandal42@gmail.com";
  let subject = "Jumpa Teman Baru";
  let body = "Silahkan masukkan pesan anda...";

  if (userEmail) {
    let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}&bbc=${userEmail}`;
    window.open(mailtoLink, "_blank");
  } else {
    alert("Masukin emailnya dulu, Sob!");
  }
}

// let pdfDoc = null;

// function previewPDF() {
//   const { jsPDF } = window.jspdf;
//   let doc = new jsPDF({
//     orientation: "landscape",
//     unit: "mm",
//     format: "a4",
//   });

//   let nama = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let nohp = document.getElementById("nohp").value;
//   let socmed = document.getElementById("socmed").value;

//   doc.text("Laporan Data", 10, 10);
//   doc.text(`Nama: ${nama}`, 10, 20);
//   doc.text(`Email: ${email}`, 10, 30);
//   doc.text(`No.HP: ${nohp}`, 10, 40);
//   doc.text(`Sosial Media: ${socmed}`, 10, 50);

//   pdfDoc = doc;

//   let pdfDataUri = doc.output("datauristring");
//   let iframe = document.getElementById("pdfPreview");
//   iframe.style.display = "block";
//   iframe.src = pdfDataUri;
// }

let pdfBlobURL = "";

function addExperience() {
  const container = document.getElementById("experienceContainer");

  const div = document.createElement("div");
  div.classList.add("experience-item");

  div.innerHTML = `
    <input
              type="text"
              class="experience-company"
              placeholder="Nama Perusahaan, ex: PT Mencari Cinta Sejati"
            />
            <input
              type="text"
              class="experience-location"
              placeholder="Lokasi Perusahaan"
            />
            <input
              type="text"
              class="experience-position"
              placeholder="Posisi, Status"
            />
            <input type="text" class="experience-year" placeholder="Masa Kerja" />

            <input
                type="text"
                class="experience-task1"
                style="margin-top: 16px"
                placeholder="Tugas Pekerjaan"
              />
              <input
                type="text"
                class="experience-task2"
                placeholder="Tugas Pekerjaan"
              />
              <input
                type="text"
                class="experience-task3"
                placeholder="Tugas Pekerjaan"
              />

            <button class="download-btn-experience" onclick="removeExperience(this)">
                <span><i class="fe fe-trash-2"></i> Hapus Pengalaman Kerja</span>
            </button>
    `;
  container.appendChild(div);
}

function updateHeaderOrgVisibility() {
  const container = document.getElementById("cvOrganisasi");
  const headerExp = document.getElementById("organizationalHeader");
  const hrLineExp = document.getElementById("organizationalLine");

  if (container.childElementCount > 0) {
    headerExp.style.display = "block";
    hrLineExp.style.display = "block";
  } else {
    headerExp.style.display = "none";
    hrLineExp.style.display = "none";
  }
}

function updateHeaderExpVisibility() {
  const container = document.getElementById("cvPengalaman");
  const headerExp = document.getElementById("experienceHeader");
  const hrLineExp = document.getElementById("experienceLine");

  if (container.childElementCount > 0) {
    headerExp.style.display = "block";
    hrLineExp.style.display = "block";
  } else {
    headerExp.style.display = "none";
    hrLineExp.style.display = "none";
  }
}

function updateHeaderIntVisibility() {
  const container = document.getElementById("cvMagang");
  const headerExp = document.getElementById("internshipHeader");
  const hrLineExp = document.getElementById("internshipLine");

  if (container.childElementCount > 0) {
    headerExp.style.display = "block";
    hrLineExp.style.display = "block";
  } else {
    headerExp.style.display = "none";
    hrLineExp.style.display = "none";
  }
}

function updateHeaderSkillVisibility() {
  const container = document.getElementById("cvSkill");
  const headerExp = document.getElementById("skillHeader");
  const hrLineExp = document.getElementById("skillLine");

  if (container.childElementCount > 0) {
    headerExp.style.display = "block";
    hrLineExp.style.display = "block";
  } else {
    headerExp.style.display = "none";
    hrLineExp.style.display = "none";
  }
}

function addOrganizational() {
  const container = document.getElementById(
    "experienceOrganizationalContainer"
  );

  const div = document.createElement("div");
  div.classList.add("experience-organizational-item");

  div.innerHTML = `
        <input
                  type="text"
                  class="experience-organizational-name"
                  placeholder="Nama Organisasi"
                />
                <input
                  type="text"
                  class="experience-organizational-location"
                  placeholder="Lokasi Organisasi"
                />
                <input
                  type="text"
                  class="experience-organizational-position"
                  placeholder="Posisi, Status"
                />
                <input type="text" class="experience-organizational-year" placeholder="Masa Organisasi" />
    
                <button class="download-btn-experience" onclick="removeExperience(this)">
                    <span><i class="fe fe-trash-2"></i> Hapus Pengalaman Organisasi</span>
                </button>
        `;
  container.appendChild(div);
}

function addInternship() {
  const container = document.getElementById("experienceInternshipContainer");

  const div = document.createElement("div");
  div.classList.add("experience-internship-item");

  div.innerHTML = `
      <input
                type="text"
                class="experience-internship-company"
                placeholder="Nama Perusahaan"
              />
              <input
                type="text"
                class="experience-internship-location"
                placeholder="Lokasi Perusahaan"
              />
              <input
                type="text"
                class="experience-internship-position"
                placeholder="Posisi, Status"
              />
              <input type="text" class="experience-internship-year" placeholder="Masa Magang" />
  
              <button class="download-btn-experience" onclick="removeExperience(this)">
                  <span><i class="fe fe-trash-2"></i> Hapus Pengalaman Magang</span>
              </button>
      `;
  container.appendChild(div);
}

function addSkill() {
  const container = document.getElementById("skillContainer");

  const div = document.createElement("div");
  div.classList.add("skill-item");

  div.innerHTML = `
        <input
                  type="text"
                  class="skill-name"
                  placeholder="ex: Membuat roket antariksa"
                />
    
                <button class="download-btn-experience" onclick="removeExperience(this)">
                    <span><i class="fe fe-trash-2"></i> Hapus Keahlian</span>
                </button>
        `;
  container.appendChild(div);
}

function removeExperience(button) {
  button.parentElement.remove();
}

function updateCV() {
  document.getElementById("cvNama").textContent =
    document.getElementById("inputNama").value || "[Nama]";
  document.getElementById("cvKontak").textContent =
    (document.getElementById("inputTelepon").value || "[Telepon]") +
    " | " +
    (document.getElementById("inputEmail").value || "[Email]") +
    " | " +
    (document.getElementById("inputSocmed").value || "[Socmed]");
  document.getElementById("cvAlamat").textContent =
    document.getElementById("inputAlamat").value || "[Alamat]";
  document.getElementById("cvDeskripsi").textContent =
    document.getElementById("inputDeskripsi").value || "[Deskripsi]";

  // Pendidikan
  document.getElementById("cvStudyName").textContent =
    document.getElementById("inputStudyName").value || "[StudyName]";
  document.getElementById("cvStudyLocation").textContent =
    document.getElementById("inputStudyLocation").value || "[StudyLocation]";
  document.getElementById("cvMajorName").textContent =
    document.getElementById("inputMajorName").value || "[MajorName]";
  document.getElementById("cvYearsOfStudy").textContent =
    document.getElementById("inputYearsOfStudy").value || "[YearsOfStudy]";

  // update pengalaman kerja
  const pengalamanList = document.getElementById("cvPengalaman");
  pengalamanList.innerHTML = "";

  document.querySelectorAll(".experience-item").forEach((exp) => {
    const perusahaanEl = exp.querySelector(".experience-company");
    const lokasiEl = exp.querySelector(".experience-location");
    const posisiEl = exp.querySelector(".experience-position");
    const tahunEl = exp.querySelector(".experience-year");
    const tugas1El = exp.querySelector(".experience-task1");
    const tugas2El = exp.querySelector(".experience-task2");
    const tugas3El = exp.querySelector(".experience-task3");

    const perusahaan = perusahaanEl
      ? perusahaanEl.value
      : "Perusahaan Tidak Diketahui";
    const lokasi = lokasiEl ? lokasiEl.value : "Lokasi Tidak Diketahui";
    const posisi = posisiEl ? posisiEl.value : "Posisi Tidak Diketahui";
    const tahun = tahunEl ? tahunEl.value : "Tahun Tidak Diketahui";
    const tugas1 = tugas1El ? tugas1El.value : "";
    const tugas2 = tugas2El ? tugas2El.value : "";
    const tugas3 = tugas3El ? tugas3El.value : "";

    const expDiv = document.createElement("div");
    expDiv.classList.add("experience-output");

    const line1 = document.createElement("div");
    line1.classList.add("experience-line");
    line1.innerHTML = `<span class="company" style="font-weight: 700">${perusahaan}</span><span class="location" style="font-weight: 700">${lokasi}</span>`;

    const line2 = document.createElement("div");
    line2.classList.add("experience-line");
    line2.innerHTML = `<span class="position">${posisi}</span><span class="year">${tahun}</span>`;

    const line3 = document.createElement("ul");
    line3.classList.add("experience-line-task");
    line3.innerHTML = `
    <li class="task" style="padding-left:7px;"><span style="font-size:28px;padding-right:3px">•</span> ${tugas1}</li>
    <li class="task" style="padding-left:7px;"><span style="font-size:28px;padding-right:3px">•</span> ${tugas2}</li>
    <li class="task" style="padding-left:7px;"><span style="font-size:28px;padding-right:3px">•</span> ${tugas3}</li>
    `;

    expDiv.appendChild(line1);
    expDiv.appendChild(line2);
    expDiv.appendChild(line3);

    pengalamanList.appendChild(expDiv);

    updateHeaderExpVisibility();
  });

  //   const magangDiv = document.querySelector(".internship");
  const organisasiList = document.getElementById("cvOrganisasi");
  organisasiList.innerHTML = "";

  document
    .querySelectorAll(".experience-organizational-item")
    .forEach((exp) => {
      const namaOrganizationalEl = exp.querySelector(
        ".experience-organizational-name"
      );
      const lokasiOrganizationalEl = exp.querySelector(
        ".experience-organizational-location"
      );
      const posisiOrganizationalEl = exp.querySelector(
        ".experience-organizational-position"
      );
      const tahunOrganizationalEl = exp.querySelector(
        ".experience-organizational-year"
      );

      const nama = namaOrganizationalEl
        ? namaOrganizationalEl.value
        : "Nama Organisasi Tidak Diketahui";
      const lokasi = lokasiOrganizationalEl
        ? lokasiOrganizationalEl.value
        : "Lokasi Tidak Diketahui";
      const posisi = posisiOrganizationalEl
        ? posisiOrganizationalEl.value
        : "Posisi Tidak Diketahui";
      const tahun = tahunOrganizationalEl
        ? tahunOrganizationalEl.value
        : "Tahun Tidak Diketahui";

      // const h3Internship = document.createElement("h3");
      // const strong = document.createElement("strong");
      // strong.textContent = "PENGALAMAN MAGANG";
      // h3Internship.appendChild(strong);

      // const hr = document.createElement("hr");

      // const magangList = document.createElement("div");
      // magangList.id = "cvMagang";

      const expDiv = document.createElement("div");
      expDiv.classList.add("experience-output");

      const line1 = document.createElement("div");
      line1.classList.add("experience-line");
      line1.innerHTML = `<span class="company" style="font-weight: 700">${nama}</span><span class="location" style="font-weight: 700">${lokasi}</span>`;

      const line2 = document.createElement("div");
      line2.classList.add("experience-line");
      line2.innerHTML = `<span class="position">${posisi}</span><span class="year">${tahun}</span>`;

      expDiv.appendChild(line1);
      expDiv.appendChild(line2);
      organisasiList.appendChild(expDiv);

      // magangDiv.appendChild(h3Internship);
      // magangDiv.appendChild(hr);
      // magangDiv.appendChild(magangList);
      updateHeaderOrgVisibility();
    });

  //   const magangDiv = document.querySelector(".internship");
  const magangList = document.getElementById("cvMagang");
  magangList.innerHTML = "";

  document.querySelectorAll(".experience-internship-item").forEach((exp) => {
    const perusahaanInternshipEl = exp.querySelector(
      ".experience-internship-company"
    );
    const lokasiInternshipEl = exp.querySelector(
      ".experience-internship-location"
    );
    const posisiInternshipEl = exp.querySelector(
      ".experience-internship-position"
    );
    const tahunInternshipEl = exp.querySelector(".experience-internship-year");

    const perusahaan = perusahaanInternshipEl
      ? perusahaanInternshipEl.value
      : "Perusahaan Tidak Diketahui";
    const lokasi = lokasiInternshipEl
      ? lokasiInternshipEl.value
      : "Lokasi Tidak Diketahui";
    const posisi = posisiInternshipEl
      ? posisiInternshipEl.value
      : "Posisi Tidak Diketahui";
    const tahun = tahunInternshipEl
      ? tahunInternshipEl.value
      : "Tahun Tidak Diketahui";

    // const h3Internship = document.createElement("h3");
    // const strong = document.createElement("strong");
    // strong.textContent = "PENGALAMAN MAGANG";
    // h3Internship.appendChild(strong);

    // const hr = document.createElement("hr");

    // const magangList = document.createElement("div");
    // magangList.id = "cvMagang";

    const expDiv = document.createElement("div");
    expDiv.classList.add("experience-output");

    const line1 = document.createElement("div");
    line1.classList.add("experience-line");
    line1.innerHTML = `<span class="company" style="font-weight: 700">${perusahaan}</span><span class="location" style="font-weight: 700">${lokasi}</span>`;

    const line2 = document.createElement("div");
    line2.classList.add("experience-line");
    line2.innerHTML = `<span class="position">${posisi}</span><span class="year">${tahun}</span>`;

    expDiv.appendChild(line1);
    expDiv.appendChild(line2);
    magangList.appendChild(expDiv);

    // magangDiv.appendChild(h3Internship);
    // magangDiv.appendChild(hr);
    // magangDiv.appendChild(magangList);
    updateHeaderIntVisibility();
  });

  //   const magangDiv = document.querySelector(".internship");
  const skillList = document.getElementById("cvSkill");
  skillList.innerHTML = "";

  document.querySelectorAll(".skill-item").forEach((exp) => {
    const skillNameEl = exp.querySelector(".skill-name");

    const skillName = skillNameEl
      ? skillNameEl.value
      : "Keahlian Tidak Diketahui";

    // const h3Internship = document.createElement("h3");
    // const strong = document.createElement("strong");
    // strong.textContent = "PENGALAMAN MAGANG";
    // h3Internship.appendChild(strong);

    // const hr = document.createElement("hr");

    // const magangList = document.createElement("div");
    // magangList.id = "cvMagang";

    const expDiv = document.createElement("div");
    expDiv.classList.add("skill-output");

    const line1 = document.createElement("ul");
    line1.classList.add("skill-line");
    line1.innerHTML = `<li class="skill-li" style="padding-left:7px;"><span style="font-size:28px;padding-right:3px">•</span> ${skillName}</li>`;

    expDiv.appendChild(line1);
    skillList.appendChild(expDiv);

    // magangDiv.appendChild(h3Internship);
    // magangDiv.appendChild(hr);
    // magangDiv.appendChild(magangList);
    updateHeaderSkillVisibility();
  });
}

async function previewwPDF() {
  updateCV(); //update data CV sebelum preview

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("l", "mm", "a4");

  const element = document.getElementById("cvContent");
  element.style.display = "block"; //Munculkan CV untuk diambil gambarnya

  const rect = element.getBoundingClientRect();
  const scaleFactor = 3;

  const canvas = await html2canvas(element, {
    scale: scaleFactor,
    width: rect.width,
    height: rect.height,
    useCORS: true,
  });
  const imgData = canvas.toDataURL("image/jpeg");

  const pdfWidth = 297;
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight, "", "FAST");

  const pdfBlob = pdf.output("blob");
  pdfBlobURL = URL.createObjectURL(pdfBlob);

  const iframe = document.getElementById("pdfFrame");
  iframe.src = pdfBlobURL;
  iframe.style.display = "block";

  element.style.display = "none"; //sembunyikan kembali CV setelah diproses
}

function downloaddPDF() {
  if (!pdfBlobURL) {
    alert("Silahkan preview PDF terlebih dahulu sebelum mendownload.");
    return;
  }
  const link = document.createElement("a");
  link.href = pdfBlobURL;
  link.download = "CV_Saya.pdf";
  link.click();
}

// function downloadPDF() {
//   if (!pdfDoc) {
//     alert("Buat preview dulu, lur!");
//   }
//   pdfDoc.save("CV.pdf");
// }
