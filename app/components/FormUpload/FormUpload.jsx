"use client";
import { useState } from "react";
import axios from "axios";
import {
  LinearProgress,
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";

const FormUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Veuillez sélectionner un fichier.");

    setLoading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      // Lire la réponse en JSON
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'upload.");
      }

      setUploadedFiles((prevFiles) => [...prevFiles, data.file]);
    } catch (error) {
      console.error("Erreur lors de l'upload:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      p={4}
      maxWidth={600}
      mx="auto"
      bgcolor="white"
      boxShadow={3}
      borderRadius={2}
    >
      <Typography variant="h4" mb={2}>
        Uploader une vidéo/audio
      </Typography>
      <TextField
        type="file"
        accept="audio/*,video/*"
        fullWidth
        onChange={handleFileChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleUpload}
        disabled={!file || loading}
      >
        {loading ? "Transcription en cours..." : "Uploader"}
      </Button>
      {loading && (
        <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />
      )}
    </Box>
  );
};

export default FormUpload;
