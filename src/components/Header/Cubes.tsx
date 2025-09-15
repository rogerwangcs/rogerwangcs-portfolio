import { useState, useEffect, useRef } from "react";
import { Cube, CubeData } from "./Cube";

export const Cubes = () => {
  const [cubes, setCubes] = useState<CubeData[]>([]);
  const nextIdRef = useRef<number>(0);
  const delayRef = useRef<boolean>(true);

  useEffect(() => {
    // Set delay to false after 15 seconds
    const delayTimeout = setTimeout(() => {
      delayRef.current = false;
    }, 15000);

    // Create new cubes every 500ms
    const interval = setInterval(() => {
      setCubes((prevCubes) => {
        let newCubes: CubeData[];
        if (delayRef.current) {
          newCubes = prevCubes.slice();
        } else {
          newCubes = prevCubes.slice(1);
        }

        const newCube: CubeData = {
          id: nextIdRef.current++,
          x: Math.floor(Math.random() * 90),
          y: Math.floor(Math.random() * 70),
        };

        newCubes.push(newCube);
        return newCubes;
      });
    }, 500);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {cubes.map((cube) => (
        <Cube key={cube.id} x={cube.x} y={cube.y} />
      ))}
    </>
  );
};
