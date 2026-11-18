
"use client";

import { useState } from "react";

import {
  Box,
  Typography,
} from "@mui/material";

import Navbar from "../../components/navbar";
import StudentTable from "../../components/studenttable";

import { students } from "../../student/data";

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    `${student.nama} ${student.nis} ${student.kelas}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box className="main-content">
      <Navbar
        title="Data Siswa"
        searchValue={search}
        onSearchChange={setSearch}
      />

      <Box className="page-content">
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ variant: "h5", fontWeight: 700 }}>
            Daftar Siswa
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Informasi seluruh data siswa yang terdaftar.
          </Typography>
        </Box>

        <StudentTable data={filteredStudents} />
      </Box>
    </Box>
  );
}
