
"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import Navbar from "../components/navbar";
import StatCard from "../components/statcard";
import StudentTable from "../components/studenttable";
import { students } from "../student/data";

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const totalSiswa = students.length;

  const lakiLaki = students.filter(
    (student) => student.jenisKelamin === "Laki-laki"
  ).length;

  const perempuan = students.filter(
    (student) => student.jenisKelamin === "Perempuan"
  ).length;

  const totalKelas = new Set(
    students.map((student) => student.kelas)
  ).size;

  const filteredStudents = students.filter((student) =>
    `${student.nama} ${student.nis} ${student.kelas}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box className="main-content">
      <Navbar
        title="Dashboard"
        searchValue={search}
        onSearchChange={setSearch}
      />

      <Box className="page-content">
        <Box sx={{ mb: 3 }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#1e293b",
              margin: 0,
            }}
          >
            Selamat Datang, Admin!
          </h2>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px",
              fontSize: "14px",
            }}
          >
            Berikut ringkasan informasi data siswa.
          </p>
        </Box>

        <Box className="stats-container">
          <StatCard
            title="Total Siswa"
            value={totalSiswa}
            description="Seluruh siswa"
          />

          <StatCard
            title="Laki-laki"
            value={lakiLaki}
            description="Jumlah siswa laki-laki"
          />

          <StatCard
            title="Perempuan"
            value={perempuan}
            description="Jumlah siswa perempuan"
          />

          <StatCard
            title="Jumlah Kelas"
            value={totalKelas}
            description="Kelas yang tersedia"
          />
        </Box>

        <StudentTable data={filteredStudents} />
      </Box>
    </Box>
  );
}
