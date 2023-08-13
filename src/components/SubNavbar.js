import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useRef, useState } from "react";

function SubNavbar({ selectedCategory, setSelectedCategory }) {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const containerRef = useRef();
  const categories = [
    "All",
    "ASMR",
    "Mixes",
    "Music",
    "Live",
    "JavaScript",
    "Meditation music",
    "Gaming",
    "Sonu Nigam",
    "Bollywood music",
    "Mobile Phones",
    "Gadgets",
    "Action-advanture games",
    "Recently Uploaded",
    "Watched",
  ];

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const handleScrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <Box
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",

        height: "75px",
      }}
    >
      <Tooltip title="Previous">
        <IconButton
          onClick={handleScrollLeft}
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "#3C3C3C" },
          }}
        >
          <ArrowLeft />
        </IconButton>
      </Tooltip>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          scrollBehavior: "smooth",
          width: "100%",
          overflow: "hidden",
        }}
        ref={containerRef}
      >
        {categories.map((category, index) => (
          <Tooltip title={category}>
            <Button
              key={index}
              sx={{
                background:
                  selectedCategory === category ? "#ededed" : "#272727",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === category ? "white" : "#3C3C3C",
                },
                borderRadius: "10px",
                color: selectedCategory === category ? "black" : "white",
                height: "35px",
                m: 1,
                whiteSpace: "nowrap",
                display: "inline-block",
                minWidth: "auto",
                padding: "5px 16px",
              }}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              <Typography
                style={{
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 200,
                }}
              >
                {category}
              </Typography>
            </Button>
          </Tooltip>
        ))}
      </Box>
      <Tooltip title="Next">
        <IconButton
          onClick={handleScrollRight}
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "#3C3C3C" },
          }}
        >
          <ArrowRight />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default SubNavbar;
