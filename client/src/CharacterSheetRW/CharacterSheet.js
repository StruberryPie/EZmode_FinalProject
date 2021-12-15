import React from "react";
import Race from "./Race";
import Alignment from "./Alignment";
import CharacterName from "./CharacterName";
import Class from "./Class";
import ExpPoints from "./ExpPoints";
import Level from "./Level";
import Abilities from "./AbilityScores/Abilities";
import PassivePerception from "./PassivePerception";
import Insperation from "./Insperation";
import ProficiencyBonus from "./ProficiencyBonus";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import Languages from "./Languages";
import Proficiencies from "./Proficiencies";
import ArmorClass from "./ArmorClass";
import Initiative from "./Initiative";
import Speed from "./Speed";
import HitPoints from "./HitPoints";
import DeathSaves from "./DeathSaves";
import AttacksAndSpellcasting from "./AttacksAndSpellcasting";
import Equipment from "./Equipment";
import Traits from "./Traits";
import Features from "./Features";
import Personality from "./Personality";
import Appearance from "./Appearance";

const CharacterSheet = () => {
  return (
    <>
      <div>
        <b>CharacterSheet</b>
      </div>
      <CharacterName />
      <Class />
      <Level />
      <Race />
      <Alignment />
      <ExpPoints />
      <Abilities />
      <Insperation />
      <ProficiencyBonus />
      <SavingThrows />
      <Skills />
      <PassivePerception />
      <Languages />
      <Proficiencies />
      <ArmorClass />
      <Initiative />
      <Speed />
      <HitPoints />
      <DeathSaves />
      <AttacksAndSpellcasting />
      <Equipment />
      <Personality />
      <Traits />
      <Features />
      <Appearance />
    </>
  );
};

export default CharacterSheet;
