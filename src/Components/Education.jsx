import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { selectEducation } from "../redux/educationSlice";

const Education = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const educationData = useSelector(selectEducation);
    
    return (
        <Box sx={{ padding: isMobile ? "20px" : "40px" }}>
        <Typography variant="h4" gutterBottom>
            {t("education.title")}
        </Typography>
        <Grid container spacing={2}>
            {educationData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
                <Typography variant="h6">{item.degree}</Typography>
                <Typography variant="subtitle1">{item.institution}</Typography>
                <Typography variant="body2">{item.year}</Typography>
                </Box>
            </Grid>
            ))}
        </Grid>
        </Box>
    );
    }
