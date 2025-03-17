"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import FormUpload from "../../components/FormUpload/FormUpload.jsx";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await axios.get("/api/files");
        setUploadedFiles(res.data.files);
      } catch (error) {
        console.error("Erreur lors du chargement des fichiers:", error);
      }
    };
    fetchFiles();
  }, []);

  const handleUploadSuccess = (newFile) => {
    setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen p-5">
        <h3 className="text-black mt-6 text-xl flex gap-3 items-center">
          <FaBars />
          Dashboard
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-4 text-black">
          {/* Formulaire d'upload */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <FormUpload onUploadSuccess={handleUploadSuccess} />
          </div>

          {/* Liste des fichiers uploadés */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl text-black font-bold p-2 text-center">
              Fichiers Uploadés
            </h2>
            <List>
              {uploadedFiles.length > 0 ? (
                uploadedFiles.map((file, index) => (
                  <ListItem key={index} divider>
                    <ListItemText
                      primary={file.name}
                      secondary={file.uploadedAt}
                    />
                  </ListItem>
                ))
              ) : (
                <Typography
                  variant="body2"
                  className="text-center text-gray-500"
                >
                  Aucun fichier uploadé.
                </Typography>
              )}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
