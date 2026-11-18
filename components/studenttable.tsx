
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import { Student } from "../student/data";

interface StudentTableProps {
  data: Student[];
}

export default function StudentTable({
  data,
}: StudentTableProps) {
  return (
    <Box className="table-section">
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ variant: "h6", fontWeight: 700 }}>
          Data Siswa
        </Typography>

        <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
          Daftar informasi seluruh siswa
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nama Siswa</TableCell>
              <TableCell>NIS</TableCell>
              <TableCell>Kelas</TableCell>
              <TableCell>Jenis Kelamin</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.length > 0 ? (
              data.map((student, index) => (
                <TableRow
                  key={student.id}
                  hover
                >
                  <TableCell>
                    {index + 1}
                  </TableCell>

                  <TableCell>
                    <Typography
                      sx={{ fontWeight: 600, fontSize: 14 }}
                    >
                      {student.nama}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    {student.nis}
                  </TableCell>

                  <TableCell>
                    {student.kelas}
                  </TableCell>

                  <TableCell>
                    {student.jenisKelamin}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={student.status}
                      color={
                        student.status === "Aktif"
                          ? "success"
                          : "default"
                      }
                      size="small"
                      sx={{
                        fontWeight: 600,
                        borderRadius: "7px",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  align="center"
                  sx={{
                    py: 5,
                    color: "text.secondary",
                  }}
                >
                  Data siswa tidak ditemukan.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
