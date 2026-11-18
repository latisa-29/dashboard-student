
"use client";

import {
  Avatar,
  Box,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

interface NavbarProps {
  title: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export default function Navbar({
  title,
  searchValue,
  onSearchChange,
}: NavbarProps) {
  return (
    <Box component="header" className="navbar">
      <Typography sx={{ variant: "h6", fontWeight: 700 }}>
        {title}
      </Typography>

      <Box className="navbar-right">
        {onSearchChange && (
          <TextField
            placeholder="Cari siswa..."
            value={searchValue || ""}
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "9px",
                backgroundColor: "#FFFFFF",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon
                      sx={{
                        color: "#94A3B8",
                        fontSize: 21,
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}

        <Box className="profile-info">
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 42,
              height: 42,
              fontWeight: 600,
            }}
          >
            A
          </Avatar>

          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
              Admin
            </Typography>

            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
            >
              Administrator
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
