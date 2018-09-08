
export interface ICharacter {
  Name: string;
  Ancestry: string;
  Size: string;
  Background: string;
  Class: {
    Name: string;
    Level: number;
  };
  Alignment: string;
  Deity: string;
  Age: number;
  Gender: string;
  Language: string[];
  Speed: number;
  Perception: {
    Training: number;
    Item: number;
    Effective: number;
  };
  SavingThrows: {
    Fortitude: {
      Training: number;
      Item: number;
      Effective: number;
    }
    Reflex: {
      Training: number;
      Item: number;
      Effective: number;
    }
    Will: {
      Training: number;
      Item: number;
      Effective: number;
    }
  }
  ArmorClass: {
    AC: {
      Training: number;
      Item: number;
      DexCap: number;
    }
    TAC: {
      Training: number;
      Item: number;
      DexCap: number;
    }
  }
  Attributes: {
    Name: string;
    LongName: string;
    Score: number;
    Modifier: number;
  } [];
  WeaponProficiencies: {
    Name: string;
    Training: number;
  } [];
  ArmorProficiencies: {
    Name: string;
    Training: number;
  } [];
  MeleeStrikes: {
    Name: string;
    Ability: string;
    Training: number;
    Item: number;
    Damage: {
      StrMod: number;
      Bludgeoning: boolean;
      Piercing: boolean;
      Slashing: boolean;
      Training: number;
      OtherDamage: number;
      Traights: string[];
    }
  }[];
  RangedStrikes: {
    Name: string;
    DexMod: number;
    Training: number;
    Item: number;
    Damage: {
      Bludgeoning: boolean;
      Piercing: boolean;
      Slashing: boolean;
      OtherDamage: number;
      Range: number;
      Traights: string[];
    }
  }[];
  Skills: {
    Name: string;
    SubName: string;
    Signature: boolean;
    Attribute: string;
    Mod: number;
    Training: number;
    Item: number;
    ArmorEffect: boolean;
    Armor: number;
  }[];
}
