import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface SlideSwitchStyleProps {
}
const SlideSwitchStyle = styled.div<SlideSwitchStyleProps>``;

interface RangeOption {display: string, code: string};
export interface ISlideSwitchProps {
    options: Array<RangeOption>;
}
export const SlideSwitch: React.FC<ISlideSwitchProps> = ({ options, ...props }) => {
    const [rangeValue, setRangeValue] = useState<string>(options[0].code);
    const [rangeOptions, setRangeOptions] = useState<Array<{index: number} & RangeOption>>();
    useEffect(() => {
        setRangeOptions(options.map((opt, opti) => ({index: opti, ...opt})));
    },[]);
    return <SlideSwitchStyle>
        <input type="range" min="1" max={options.length} value={rangeValue}/>
        </SlideSwitchStyle>
}