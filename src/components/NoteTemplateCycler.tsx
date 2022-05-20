import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardTemplateType, TemplateDetails } from "../types/Template";

interface ICyclerOption {
    code: string;
    label: string;
}

interface INoteTemplateCyclerProps {
    onChange: (t: CardTemplateType) => void;
    value: CardTemplateType;
}

interface ICyclerProps {
    onChange: (newValue: string) => void;
    options: Array<ICyclerOption>;
    value: string;
    description?: string;
}

const CyclerStyle = styled.div<{}>`
font-size: ${props => props.theme.font.size.small};
font-weight: bold;
`;


const Cycler = (props: ICyclerProps) => {
    const [options, setOptions] = useState<Array<ICyclerOption>>([]);
    const [optionIndex, setOptionIndex] = useState<number>(0);


    useEffect(() => {
        setOptions(props.options);
    }, [props.options]);

    const onClick = (e: React.MouseEvent) => {
        setOptionIndex(optionIndex < options.length ? optionIndex+1 : 0);
        props.onChange(options.at(optionIndex)?.code ?? "")
    }

    return <CyclerStyle onClick={onClick} title={props.description}>
        {props.value}
    </CyclerStyle>
}

export const NoteTemplateCycler = (props: INoteTemplateCyclerProps) => {
    let options: Array<ICyclerOption> = Object.keys(CardTemplateType).map((t) => {
        return { code: t, label: TemplateDetails[t as CardTemplateType].label }
    });
    return <Cycler
        options={options}
        onChange={(newValue: string) => {
            if (Object.keys(CardTemplateType).includes(newValue))
                props.onChange(CardTemplateType[newValue as CardTemplateType])
        }}
        value={props.value}
        description="Change note template"
        />
}