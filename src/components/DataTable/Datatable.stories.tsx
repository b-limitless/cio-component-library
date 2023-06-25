

import React from 'react';
import DataTable from './DataTable';


export default {
    title: "Components/v1/DataTable",
    component: DataTable,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <DataTable {...args} />

export const Default:any =  Template.bind({});

const tableHeader = ["title", "type", "price", "material", "season", "action"];

const tableData:any = [{
      title: "Hello World",
      price: 123,
      delivery_time: "days in time",
      image_link: "Url of the image",
      excellence: "in 5 rating star",
      warmth: "5 rating start",
      weight: "300 gr/m^2",
      yarn: "",
      composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
      season: "Year round",
      thread_style: "Twill",
      brightness: "",
      super_shiny: 0,
      material: "Cotton",
      tone: " - Navy Blue",
      thread_count: "",
      opacity: "",
      waterproof: true,
      stretchy_text: "Stretchy",
      stretchy: "",
      mis: ["new", "eco", "easy iron", "none iron"],
      type: ["shirt", "pants", "suits"],
    },
    {
      title: "Hello World",
      price: 123,
      delivery_time: "days in time",
      image_link: "Url of the image",
      excellence: "in 5 rating star",
      warmth: "5 rating start",
      weight: "300 gr/m^2",
      yarn: "",
      composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
      season: "Year round",
      thread_style: "Twill",
      brightness: "",
      super_shiny: 0,
      material: "Cotton",
      tone: " - Navy Blue",
      thread_count: "",
      opacity: "",
      waterproof: true,
      stretchy_text: "Stretchy",
      stretchy: "",
      mis: ["new", "eco", "easy iron", "none iron"],
      type: ["shirt", "pants", "suits"],
    
      
    },
    {
      title: "Hello World",
      price: 123,
      delivery_time: "days in time",
      image_link: "Url of the image",
      excellence: "in 5 rating star",
      warmth: "5 rating start",
      weight: "300 gr/m^2",
      yarn: "",
      composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
      season: "Year round",
      thread_style: "Twill",
      brightness: "",
      super_shiny: 0,
      material: "Cotton",
      tone: " - Navy Blue",
      thread_count: "",
      opacity: "",
      waterproof: true,
      stretchy_text: "Stretchy",
      stretchy: "",
      mis: ["new", "eco", "easy iron", "none iron"],
      type: ["shirt", "pants", "suits"],
    
      
    },
    {
      title: "Hello World",
      price: 123,
      delivery_time: "days in time",
      image_link: "Url of the image",
      excellence: "in 5 rating star",
      warmth: "5 rating start",
      weight: "300 gr/m^2",
      yarn: "",
      composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
      season: "Year round",
      thread_style: "Twill",
      brightness: "",
      super_shiny: 0,
      material: "Cotton",
      tone: " - Navy Blue",
      thread_count: "",
      opacity: "",
      waterproof: true,
      stretchy_text: "Stretchy",
      stretchy: "",
      mis: ["new", "eco", "easy iron", "none iron"],
      type: ["shirt", "pants", "suits"],
    
      
    }
    ]
const showFebricModels = false;
const detailsComponents = 'Hello';
const showRowDetailsHandler = () => { return null };
const showDetailReactNode = "Hello";
const tableTitle = "Table Title";
const setShowSelectRowId = function() { return null }

Default.args = {
    tableHeader,
    tableData,
    showFebricModels,
    detailsComponents,
    showRowDetailsHandler,
    showDetailReactNode,
    tableTitle, 
    showToLeftButton: true, 
    test:true, 
    setShowSelectRowId
}
