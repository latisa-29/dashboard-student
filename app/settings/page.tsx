
"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import Navbar from "../../components/navbar";

export default function SettingsPage() {
  const [nama, setNama] = useState("Admin");
  const [email, setEmail] = useState("admin@gmail.com");
  const [sekolah, setSekolah] = useState("SMK Telkom Malang");

  const handleSave = () => {
    alert("Pengaturan berhasil disimpan!");
  };

  return (
    <Box className="main-content">
      <Navbar title="Pengaturan" />

      <Box className="page-content">
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ variant: "h5", fontWeight: 700 }}>
            Pengaturan
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Kelola informasi administrator dan sekolah.
          </Typography>
        </Box>

        <Card className="settings-card">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: 2,
                backgroundColor: "primary.light",
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PersonOutlineRoundedIcon />
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 700 }}>
                Informasi Administrator
              </Typography>

              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                Informasi akun pengelola aplikasi
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box className="settings-form">
            <TextField
              label="Nama Administrator"
              fullWidth
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Nama Sekolah"
              fullWidth
              value={sekolah}
              onChange={(e) => setSekolah(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ width: "fit-content" }}
            >
              Simpan Pengaturan
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
