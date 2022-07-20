import React,{useCallback} from "react";
import './styles/App.css';
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./data/particles.json";
import { ISourceOptions } from "tsparticles-engine";

import Profile from "./components/profile";

const App = ()=>{

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Particles 
                options={particlesOptions as ISourceOptions}
                init={particlesInit}
            />
            <div className="container mx-auto px-10 md_px-40">
                <div className="text-gray-200">
                    <Profile />
                </div>
            </div>
        </>

    );
}

export default App;