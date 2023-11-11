import { motion } from "framer-motion";

const springAnim = {
    type: "spring",
    damping: 20,
    stiffness: 300
};

function Bars({values, colors}){
    
    return (
        <div style={{ display: "flex" }}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              style={{
                width: "30px", // Adjust the width as needed
                height: `${value}px`,
                backgroundColor: colors[index % colors.length],
                margin: "0 5px", // Adjust the margin as needed
              }}
            //   initial={{ opacity: 0, height: 0 }}
            //   animate={{ opacity: 1, height: `${value}px` }}
              layout transition={springAnim}
            >
                {value}
            </motion.div>
          ))}
        </div>
      );
};
export default Bars;