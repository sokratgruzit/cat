import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Cats } from "../../types/types";
import { api } from "../../utils/api";
import { useAppDispatch, useAppSelector } from "../../store";
import { setLoading } from "../../store/appReducer";

import { Loader } from "../UI/loader/Loader";

import styles from "./PrettyCats.module.css";

export const PrettyCats = () => {
    const [cats, setCats] = useState<Cats>([]);
    
    const loading = useAppSelector((state) => state.app.loading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading({
            loading: true
        }));

        const getCats = async () => {
            api
            .get("/images/search?limit=20")
            .then((res: any) => {
                let data = res.data;
                
                dispatch(setLoading({
                    loading: false
                }));
                setCats(data);
            })
            .catch((err: any) => {
                console.log(err);

                dispatch(setLoading({
                    loading: false
                }));
            });
        };
    
        getCats();
    }, []);

    return (
        <div className={styles.container}>
            {!loading && cats.map((cat, i) => {
                return (
                    <motion.img 
                        key={cat.id} 
                        src={cat.url} 
                        alt={cat.id} 
                        className={styles.cat} 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.1,
                            ease: "easeInOut",
                            delay: i * 0.25,
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                        }}
                    />
                )
            })}
            {loading && <Loader />}
        </div>
    )
};