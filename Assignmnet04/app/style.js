import { StyleSheet } from "react-native";

export default StyleSheet.create({
  homeContainer: { 
    paddingVertical: 20,
    paddingHorizontal: 10,
    
  },

  slideBox: {
    width: 260,
    height:190,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginRight: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  
  },

  slideImg: { 
    width: "100%",
    height: 180,
    borderRadius: 12,
    backgroundColor: "#eee",
  },

  slideText: { 
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  navBtn: {
    marginTop: 10,
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
});
