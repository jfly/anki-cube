const images = [
    "out/FRU'R'U'RUR'F'RUR'F'U'FRU'R'.svg",
    "out/FRU'R'U'RUR'F'RUR'F'U'FRU'R'U2.svg",
    "out/FRU'R'U'RUR'F'RUR'F'U'FRU'R'U'.svg",
    "out/FRU'R'U'RUR'F'RUR'F'U'FRU'R'U.svg",
    "out/M2UM2U2M2UM2.svg",
    "out/M2UM2U2M2UM2U2.svg",
    "out/M2UM2U2M2UM2U'.svg",
    "out/M2UM2U2M2UM2U.svg",
    "out/M2UM2UM'U2M2U2M'.svg",
    "out/M2UM2UM'U2M2U2M'U2.svg",
    "out/M2UM2UM'U2M2U2M'U'.svg",
    "out/M2UM2UM'U2M2U2M'U.svg",
    "out/R2UR'UR'U'RU'R2DU'R'URD'.svg",
    "out/R2UR'UR'U'RU'R2DU'R'URD'U2.svg",
    "out/R2UR'UR'U'RU'R2DU'R'URD'U'.svg",
    "out/R2UR'UR'U'RU'R2DU'R'URD'U.svg",
    "out/R2URUR'U'R'U'R'UR'.svg",
    "out/R2URUR'U'R'U'R'UR'U2.svg",
    "out/R2URUR'U'R'U'R'UR'U'.svg",
    "out/R2URUR'U'R'U'R'UR'U.svg",
    "out/R'U2RU2R'FRUR'U'R'F'R2U'.svg",
    "out/R'U2RU2R'FRUR'U'R'F'R2U'U2.svg",
    "out/R'U2RU2R'FRUR'U'R'F'R2U'U'.svg",
    "out/R'U2RU2R'FRUR'U'R'F'R2U'U.svg",
    "out/R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'.svg",
    "out/R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U2.svg",
    "out/R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U'.svg",
    "out/R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U.svg",
    "out/R'UL'U2RU'R'U2RL.svg",
    "out/R'UL'U2RU'R'U2RLU2.svg",
    "out/R'UL'U2RU'R'U2RLU'.svg",
    "out/R'UL'U2RU'R'U2RLU.svg",
    "out/RUR'F'RUR'U'R'FR2U'R'.svg",
    "out/RUR'F'RUR'U'R'FR2U'R'U2.svg",
    "out/RUR'F'RUR'U'R'FR2U'R'U'.svg",
    "out/RUR'F'RUR'U'R'FR2U'R'U.svg",
    "out/R'U'RUD'R2UR'URU'RU'R2D.svg",
    "out/RUR'U'DR2U'RU'R'UR'UR2D'.svg",
    "out/R'U'RUD'R2UR'URU'RU'R2DU2.svg",
    "out/RUR'U'DR2U'RU'R'UR'UR2D'U2.svg",
    "out/R'U'RUD'R2UR'URU'RU'R2DU'.svg",
    "out/R'U'RUD'R2UR'URU'RU'R2DU.svg",
    "out/RUR'U'DR2U'RU'R'UR'UR2D'U'.svg",
    "out/RUR'U'DR2U'RU'R'UR'UR2D'U.svg",
    "out/RUR'U'R'FR2U'R'U'RUR'F'.svg",
    "out/RUR'U'R'FR2U'R'U'RUR'F'U2.svg",
    "out/RUR'U'R'FR2U'R'U'RUR'F'U'.svg",
    "out/RUR'U'R'FR2U'R'U'RUR'F'U.svg",
    "out/RU'R'U'RURDR'U'RD'R'U2R'.svg",
    "out/RU'R'U'RURDR'U'RD'R'U2R'U2.svg",
    "out/RU'R'U'RURDR'U'RD'R'U2R'U'.svg",
    "out/RU'R'U'RURDR'U'RD'R'U2R'U.svg",
    "out/RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'.svg",
    "out/RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U2.svg",
    "out/RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U'.svg",
    "out/RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U.svg",
    "out/RU'RURURU'R'U'R2.svg",
    "out/RU'RURURU'R'U'R2U2.svg",
    "out/RU'RURURU'R'U'R2U'.svg",
    "out/RU'RURURU'R'U'R2U.svg",
    "out/R'UR'U'yR'F'R2U'R'UR'FRFy'.svg",
    "out/R'UR'U'yR'F'R2U'R'UR'FRFy'U2.svg",
    "out/R'UR'U'yR'F'R2U'R'UR'FRFy'U'.svg",
    "out/R'UR'U'yR'F'R2U'R'UR'FRFy'U.svg",
    "out/U2FRU'R'U'RUR'F'RUR'F'U'FRU'R'.svg",
    "out/U2FRU'R'U'RUR'F'RUR'F'U'FRU'R'U2.svg",
    "out/U2FRU'R'U'RUR'F'RUR'F'U'FRU'R'U'.svg",
    "out/U2FRU'R'U'RUR'F'RUR'F'U'FRU'R'U.svg",
    "out/U2M2UM2U2M2UM2.svg",
    "out/U2M2UM2U2M2UM2U2.svg",
    "out/U2M2UM2U2M2UM2U'.svg",
    "out/U2M2UM2U2M2UM2U.svg",
    "out/U2M2UM2UM'U2M2U2M'.svg",
    "out/U2M2UM2UM'U2M2U2M'U2.svg",
    "out/U2M2UM2UM'U2M2U2M'U'.svg",
    "out/U2M2UM2UM'U2M2U2M'U.svg",
    "out/U2R2F2RU2RU2R'FRUR'U'R'FR2.svg",
    "out/U2R2F2RU2RU2R'FRUR'U'R'FR2U2.svg",
    "out/U2R2F2RU2RU2R'FRUR'U'R'FR2U'.svg",
    "out/U2R2F2RU2RU2R'FRUR'U'R'FR2U.svg",
    "out/U2R2UR'UR'U'RU'R2DU'R'URD'.svg",
    "out/U2R2UR'UR'U'RU'R2DU'R'URD'U2.svg",
    "out/U2R2UR'UR'U'RU'R2DU'R'URD'U'.svg",
    "out/U2R2UR'UR'U'RU'R2DU'R'URD'U.svg",
    "out/U2R2URUR'U'R'U'R'UR'.svg",
    "out/U2R2URUR'U'R'U'R'UR'U2.svg",
    "out/U2R2URUR'U'R'U'R'UR'U'.svg",
    "out/U2R2URUR'U'R'U'R'UR'U.svg",
    "out/U2R'U2RU2R'FRUR'U'R'F'R2U'.svg",
    "out/U2R'U2RU2R'FRUR'U'R'F'R2U'U2.svg",
    "out/U2R'U2RU2R'FRUR'U'R'F'R2U'U'.svg",
    "out/U2R'U2RU2R'FRUR'U'R'F'R2U'U.svg",
    "out/U2R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'.svg",
    "out/U2R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U2.svg",
    "out/U2R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U'.svg",
    "out/U2R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U.svg",
    "out/U2R'UL'U2RU'R'U2RL.svg",
    "out/U2R'UL'U2RU'R'U2RLU2.svg",
    "out/U2R'UL'U2RU'R'U2RLU'.svg",
    "out/U2R'UL'U2RU'R'U2RLU.svg",
    "out/U2RUR'F'RUR'U'R'FR2U'R'.svg",
    "out/U2RUR'F'RUR'U'R'FR2U'R'U2.svg",
    "out/U2RUR'F'RUR'U'R'FR2U'R'U'.svg",
    "out/U2RUR'F'RUR'U'R'FR2U'R'U.svg",
    "out/U2R'U'RUD'R2UR'URU'RU'R2D.svg",
    "out/U2RUR'U'DR2U'RU'R'UR'UR2D'.svg",
    "out/U2R'U'RUD'R2UR'URU'RU'R2DU2.svg",
    "out/U2RUR'U'DR2U'RU'R'UR'UR2D'U2.svg",
    "out/U2R'U'RUD'R2UR'URU'RU'R2DU'.svg",
    "out/U2R'U'RUD'R2UR'URU'RU'R2DU.svg",
    "out/U2RUR'U'DR2U'RU'R'UR'UR2D'U'.svg",
    "out/U2RUR'U'DR2U'RU'R'UR'UR2D'U.svg",
    "out/U2RUR'U'R'FR2U'R'U'RUR'F'.svg",
    "out/U2RUR'U'R'FR2U'R'U'RUR'F'U2.svg",
    "out/U2RUR'U'R'FR2U'R'U'RUR'F'U'.svg",
    "out/U2RUR'U'R'FR2U'R'U'RUR'F'U.svg",
    "out/U2RU'R'U'RURDR'U'RD'R'U2R'.svg",
    "out/U2RU'R'U'RURDR'U'RD'R'U2R'U2.svg",
    "out/U2RU'R'U'RURDR'U'RD'R'U2R'U'.svg",
    "out/U2RU'R'U'RURDR'U'RD'R'U2R'U.svg",
    "out/U2RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'.svg",
    "out/U2RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U2.svg",
    "out/U2RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U'.svg",
    "out/U2RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U.svg",
    "out/U2RU'RURURU'R'U'R2.svg",
    "out/U2RU'RURURU'R'U'R2U2.svg",
    "out/U2RU'RURURU'R'U'R2U'.svg",
    "out/U2RU'RURURU'R'U'R2U.svg",
    "out/U2R'UR'U'yR'F'R2U'R'UR'FRFy'.svg",
    "out/U2R'UR'U'yR'F'R2U'R'UR'FRFy'U2.svg",
    "out/U2R'UR'U'yR'F'R2U'R'UR'FRFy'U'.svg",
    "out/U2R'UR'U'yR'F'R2U'R'UR'FRFy'U.svg",
    "out/U2U2R2F2RU2RU2R'FRUR'U'R'FR2.svg",
    "out/U2U2R2F2RU2RU2R'FRUR'U'R'FR2U2.svg",
    "out/U2U2R2F2RU2RU2R'FRUR'U'R'FR2U'.svg",
    "out/U2U2R2F2RU2RU2R'FRUR'U'R'FR2U.svg",
    "out/U2x'RU'RD2R'URD2R2x.svg",
    "out/U2xR'UR'D2RU'R'D2R2x'.svg",
    "out/U2x'RU'RD2R'URD2R2xU2.svg",
    "out/U2xR'UR'D2RU'R'D2R2x'U2.svg",
    "out/U2x'RU'RD2R'URD2R2xU'.svg",
    "out/U2x'RU'RD2R'URD2R2xU.svg",
    "out/U2xR'UR'D2RU'R'D2R2x'U'.svg",
    "out/U2xR'UR'D2RU'R'D2R2x'U.svg",
    "out/U2x'RU'R'DRUR'D'RUR'DRU'R'D'x.svg",
    "out/U2x'RU'R'DRUR'D'RUR'DRU'R'D'xU2.svg",
    "out/U2x'RU'R'DRUR'D'RUR'DRU'R'D'xU'.svg",
    "out/U2x'RU'R'DRUR'D'RUR'DRU'R'D'xU.svg",
    "out/U2zU'RD'R2UR'DU'RD'R2UR'Dz'.svg",
    "out/U2zU'RD'R2UR'DU'RD'R2UR'Dz'U2.svg",
    "out/U2zU'RD'R2UR'DU'RD'R2UR'Dz'U'.svg",
    "out/U2zU'RD'R2UR'DU'RD'R2UR'Dz'U.svg",
    "out/U'FRU'R'U'RUR'F'RUR'F'U'FRU'R'.svg",
    "out/UFRU'R'U'RUR'F'RUR'F'U'FRU'R'.svg",
    "out/U'FRU'R'U'RUR'F'RUR'F'U'FRU'R'U2.svg",
    "out/UFRU'R'U'RUR'F'RUR'F'U'FRU'R'U2.svg",
    "out/U'FRU'R'U'RUR'F'RUR'F'U'FRU'R'U'.svg",
    "out/U'FRU'R'U'RUR'F'RUR'F'U'FRU'R'U.svg",
    "out/UFRU'R'U'RUR'F'RUR'F'U'FRU'R'U'.svg",
    "out/UFRU'R'U'RUR'F'RUR'F'U'FRU'R'U.svg",
    "out/U'M2UM2U2M2UM2.svg",
    "out/UM2UM2U2M2UM2.svg",
    "out/U'M2UM2U2M2UM2U2.svg",
    "out/UM2UM2U2M2UM2U2.svg",
    "out/U'M2UM2U2M2UM2U'.svg",
    "out/U'M2UM2U2M2UM2U.svg",
    "out/UM2UM2U2M2UM2U'.svg",
    "out/UM2UM2U2M2UM2U.svg",
    "out/U'M2UM2UM'U2M2U2M'.svg",
    "out/UM2UM2UM'U2M2U2M'.svg",
    "out/U'M2UM2UM'U2M2U2M'U2.svg",
    "out/UM2UM2UM'U2M2U2M'U2.svg",
    "out/U'M2UM2UM'U2M2U2M'U'.svg",
    "out/U'M2UM2UM'U2M2U2M'U.svg",
    "out/UM2UM2UM'U2M2U2M'U'.svg",
    "out/UM2UM2UM'U2M2U2M'U.svg",
    "out/U'R2UR'UR'U'RU'R2DU'R'URD'.svg",
    "out/UR2UR'UR'U'RU'R2DU'R'URD'.svg",
    "out/U'R2UR'UR'U'RU'R2DU'R'URD'U2.svg",
    "out/UR2UR'UR'U'RU'R2DU'R'URD'U2.svg",
    "out/U'R2UR'UR'U'RU'R2DU'R'URD'U'.svg",
    "out/U'R2UR'UR'U'RU'R2DU'R'URD'U.svg",
    "out/UR2UR'UR'U'RU'R2DU'R'URD'U'.svg",
    "out/UR2UR'UR'U'RU'R2DU'R'URD'U.svg",
    "out/U'R2URUR'U'R'U'R'UR'.svg",
    "out/UR2URUR'U'R'U'R'UR'.svg",
    "out/U'R2URUR'U'R'U'R'UR'U2.svg",
    "out/UR2URUR'U'R'U'R'UR'U2.svg",
    "out/U'R2URUR'U'R'U'R'UR'U'.svg",
    "out/U'R2URUR'U'R'U'R'UR'U.svg",
    "out/UR2URUR'U'R'U'R'UR'U'.svg",
    "out/UR2URUR'U'R'U'R'UR'U.svg",
    "out/U'R'U2RU2R'FRUR'U'R'F'R2U'.svg",
    "out/UR'U2RU2R'FRUR'U'R'F'R2U'.svg",
    "out/U'R'U2RU2R'FRUR'U'R'F'R2U'U2.svg",
    "out/UR'U2RU2R'FRUR'U'R'F'R2U'U2.svg",
    "out/U'R'U2RU2R'FRUR'U'R'F'R2U'U'.svg",
    "out/U'R'U2RU2R'FRUR'U'R'F'R2U'U.svg",
    "out/UR'U2RU2R'FRUR'U'R'F'R2U'U'.svg",
    "out/UR'U2RU2R'FRUR'U'R'F'R2U'U.svg",
    "out/U'R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'.svg",
    "out/UR'U2R'U'yR'F'R2U'R'UR'FRU'Fy'.svg",
    "out/U'R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U2.svg",
    "out/UR'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U2.svg",
    "out/U'R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U'.svg",
    "out/U'R'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U.svg",
    "out/UR'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U'.svg",
    "out/UR'U2R'U'yR'F'R2U'R'UR'FRU'Fy'U.svg",
    "out/U'R'UL'U2RU'R'U2RL.svg",
    "out/UR'UL'U2RU'R'U2RL.svg",
    "out/U'R'UL'U2RU'R'U2RLU2.svg",
    "out/UR'UL'U2RU'R'U2RLU2.svg",
    "out/U'R'UL'U2RU'R'U2RLU'.svg",
    "out/U'R'UL'U2RU'R'U2RLU.svg",
    "out/UR'UL'U2RU'R'U2RLU'.svg",
    "out/UR'UL'U2RU'R'U2RLU.svg",
    "out/U'RUR'F'RUR'U'R'FR2U'R'.svg",
    "out/URUR'F'RUR'U'R'FR2U'R'.svg",
    "out/U'RUR'F'RUR'U'R'FR2U'R'U2.svg",
    "out/URUR'F'RUR'U'R'FR2U'R'U2.svg",
    "out/U'RUR'F'RUR'U'R'FR2U'R'U'.svg",
    "out/U'RUR'F'RUR'U'R'FR2U'R'U.svg",
    "out/URUR'F'RUR'U'R'FR2U'R'U'.svg",
    "out/URUR'F'RUR'U'R'FR2U'R'U.svg",
    "out/U'R'U'RUD'R2UR'URU'RU'R2D.svg",
    "out/U'RUR'U'DR2U'RU'R'UR'UR2D'.svg",
    "out/UR'U'RUD'R2UR'URU'RU'R2D.svg",
    "out/URUR'U'DR2U'RU'R'UR'UR2D'.svg",
    "out/U'R'U'RUD'R2UR'URU'RU'R2DU2.svg",
    "out/U'RUR'U'DR2U'RU'R'UR'UR2D'U2.svg",
    "out/UR'U'RUD'R2UR'URU'RU'R2DU2.svg",
    "out/URUR'U'DR2U'RU'R'UR'UR2D'U2.svg",
    "out/U'R'U'RUD'R2UR'URU'RU'R2DU'.svg",
    "out/U'R'U'RUD'R2UR'URU'RU'R2DU.svg",
    "out/U'RUR'U'DR2U'RU'R'UR'UR2D'U'.svg",
    "out/U'RUR'U'DR2U'RU'R'UR'UR2D'U.svg",
    "out/UR'U'RUD'R2UR'URU'RU'R2DU'.svg",
    "out/UR'U'RUD'R2UR'URU'RU'R2DU.svg",
    "out/URUR'U'DR2U'RU'R'UR'UR2D'U'.svg",
    "out/URUR'U'DR2U'RU'R'UR'UR2D'U.svg",
    "out/U'RUR'U'R'FR2U'R'U'RUR'F'.svg",
    "out/URUR'U'R'FR2U'R'U'RUR'F'.svg",
    "out/U'RUR'U'R'FR2U'R'U'RUR'F'U2.svg",
    "out/URUR'U'R'FR2U'R'U'RUR'F'U2.svg",
    "out/U'RUR'U'R'FR2U'R'U'RUR'F'U'.svg",
    "out/U'RUR'U'R'FR2U'R'U'RUR'F'U.svg",
    "out/URUR'U'R'FR2U'R'U'RUR'F'U'.svg",
    "out/URUR'U'R'FR2U'R'U'RUR'F'U.svg",
    "out/U'RU'R'U'RURDR'U'RD'R'U2R'.svg",
    "out/URU'R'U'RURDR'U'RD'R'U2R'.svg",
    "out/U'RU'R'U'RURDR'U'RD'R'U2R'U2.svg",
    "out/URU'R'U'RURDR'U'RD'R'U2R'U2.svg",
    "out/U'RU'R'U'RURDR'U'RD'R'U2R'U'.svg",
    "out/U'RU'R'U'RURDR'U'RD'R'U2R'U.svg",
    "out/URU'R'U'RURDR'U'RD'R'U2R'U'.svg",
    "out/URU'R'U'RURDR'U'RD'R'U2R'U.svg",
    "out/U'RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'.svg",
    "out/URUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'.svg",
    "out/U'RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U2.svg",
    "out/URUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U2.svg",
    "out/U'RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U'.svg",
    "out/U'RUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U.svg",
    "out/URUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U'.svg",
    "out/URUR'URUR'F'RUR'U'R'FR2U'R'U2RU'R'U.svg",
    "out/U'RU'RURURU'R'U'R2.svg",
    "out/URU'RURURU'R'U'R2.svg",
    "out/U'RU'RURURU'R'U'R2U2.svg",
    "out/URU'RURURU'R'U'R2U2.svg",
    "out/U'RU'RURURU'R'U'R2U'.svg",
    "out/U'RU'RURURU'R'U'R2U.svg",
    "out/URU'RURURU'R'U'R2U'.svg",
    "out/URU'RURURU'R'U'R2U.svg",
    "out/U'R'UR'U'yR'F'R2U'R'UR'FRFy'.svg",
    "out/UR'UR'U'yR'F'R2U'R'UR'FRFy'.svg",
    "out/U'R'UR'U'yR'F'R2U'R'UR'FRFy'U2.svg",
    "out/UR'UR'U'yR'F'R2U'R'UR'FRFy'U2.svg",
    "out/U'R'UR'U'yR'F'R2U'R'UR'FRFy'U'.svg",
    "out/U'R'UR'U'yR'F'R2U'R'UR'FRFy'U.svg",
    "out/UR'UR'U'yR'F'R2U'R'UR'FRFy'U'.svg",
    "out/UR'UR'U'yR'F'R2U'R'UR'FRFy'U.svg",
    "out/U'U2R2F2RU2RU2R'FRUR'U'R'FR2.svg",
    "out/UU2R2F2RU2RU2R'FRUR'U'R'FR2.svg",
    "out/U'U2R2F2RU2RU2R'FRUR'U'R'FR2U2.svg",
    "out/UU2R2F2RU2RU2R'FRUR'U'R'FR2U2.svg",
    "out/U'U2R2F2RU2RU2R'FRUR'U'R'FR2U'.svg",
    "out/U'U2R2F2RU2RU2R'FRUR'U'R'FR2U.svg",
    "out/UU2R2F2RU2RU2R'FRUR'U'R'FR2U'.svg",
    "out/UU2R2F2RU2RU2R'FRUR'U'R'FR2U.svg",
    "out/U'x'RU'RD2R'URD2R2x.svg",
    "out/U'xR'UR'D2RU'R'D2R2x'.svg",
    "out/Ux'RU'RD2R'URD2R2x.svg",
    "out/UxR'UR'D2RU'R'D2R2x'.svg",
    "out/U'x'RU'RD2R'URD2R2xU2.svg",
    "out/U'xR'UR'D2RU'R'D2R2x'U2.svg",
    "out/Ux'RU'RD2R'URD2R2xU2.svg",
    "out/UxR'UR'D2RU'R'D2R2x'U2.svg",
    "out/U'x'RU'RD2R'URD2R2xU'.svg",
    "out/U'x'RU'RD2R'URD2R2xU.svg",
    "out/U'xR'UR'D2RU'R'D2R2x'U'.svg",
    "out/U'xR'UR'D2RU'R'D2R2x'U.svg",
    "out/Ux'RU'RD2R'URD2R2xU'.svg",
    "out/Ux'RU'RD2R'URD2R2xU.svg",
    "out/UxR'UR'D2RU'R'D2R2x'U'.svg",
    "out/UxR'UR'D2RU'R'D2R2x'U.svg",
    "out/U'x'RU'R'DRUR'D'RUR'DRU'R'D'x.svg",
    "out/Ux'RU'R'DRUR'D'RUR'DRU'R'D'x.svg",
    "out/U'x'RU'R'DRUR'D'RUR'DRU'R'D'xU2.svg",
    "out/Ux'RU'R'DRUR'D'RUR'DRU'R'D'xU2.svg",
    "out/U'x'RU'R'DRUR'D'RUR'DRU'R'D'xU'.svg",
    "out/U'x'RU'R'DRUR'D'RUR'DRU'R'D'xU.svg",
    "out/Ux'RU'R'DRUR'D'RUR'DRU'R'D'xU'.svg",
    "out/Ux'RU'R'DRUR'D'RUR'DRU'R'D'xU.svg",
    "out/U'zU'RD'R2UR'DU'RD'R2UR'Dz'.svg",
    "out/UzU'RD'R2UR'DU'RD'R2UR'Dz'.svg",
    "out/U'zU'RD'R2UR'DU'RD'R2UR'Dz'U2.svg",
    "out/UzU'RD'R2UR'DU'RD'R2UR'Dz'U2.svg",
    "out/U'zU'RD'R2UR'DU'RD'R2UR'Dz'U'.svg",
    "out/U'zU'RD'R2UR'DU'RD'R2UR'Dz'U.svg",
    "out/UzU'RD'R2UR'DU'RD'R2UR'Dz'U'.svg",
    "out/UzU'RD'R2UR'DU'RD'R2UR'Dz'U.svg",
    "out/x'RU'RD2R'URD2R2x.svg",
    "out/xR'UR'D2RU'R'D2R2x'.svg",
    "out/x'RU'RD2R'URD2R2xU2.svg",
    "out/xR'UR'D2RU'R'D2R2x'U2.svg",
    "out/x'RU'RD2R'URD2R2xU'.svg",
    "out/x'RU'RD2R'URD2R2xU.svg",
    "out/xR'UR'D2RU'R'D2R2x'U'.svg",
    "out/xR'UR'D2RU'R'D2R2x'U.svg",
    "out/x'RU'R'DRUR'D'RUR'DRU'R'D'x.svg",
    "out/x'RU'R'DRUR'D'RUR'DRU'R'D'xU2.svg",
    "out/x'RU'R'DRUR'D'RUR'DRU'R'D'xU'.svg",
    "out/x'RU'R'DRUR'D'RUR'DRU'R'D'xU.svg",
    "out/zU'RD'R2UR'DU'RD'R2UR'Dz'.svg",
    "out/zU'RD'R2UR'DU'RD'R2UR'Dz'U2.svg",
    "out/zU'RD'R2UR'DU'RD'R2UR'Dz'U'.svg",
    "out/zU'RD'R2UR'DU'RD'R2UR'Dz'U.svg",
];

window.addEventListener("load", function() {
    let [columns, rows] = getColumnsAndRows();

    let contentDiv = document.getElementById("content");

    function newPage() {
        let page = document.createElement("div");
        page.classList.add("page")
        contentDiv.appendChild(page);
        return page;
    }

    outer: while(true) {
        let page = null;
        for(let row = 0; row < rows; row++) {
            for(let column = 0; column < columns; column++) {
                if(images.length === 0) {
                    break outer;
                }
                if(page === null) {
                    page = newPage();
                }
                let image = images.shift();
                const caseEl = document.createElement("span");
                caseEl.classList.add("case");
                caseEl.classList.toggle("touching-top", row === 0);
                caseEl.classList.toggle("touching-bottom", row === rows-1);
                caseEl.classList.toggle("touching-left", column === 0);
                caseEl.classList.toggle("touching-right", column === columns-1);
                const svg = document.createElement("img");
                svg.src = image;
                caseEl.appendChild(svg);
                page.appendChild(caseEl);
            }
        }
    }
});

function getColumnsAndRows() {
    let page = document.createElement("div");
    page.classList.add("page")
    document.body.appendChild(page);
    let style = getComputedStyle(page);
    const columns = style.gridTemplateColumns.split(" ").length;
    const rows = style.gridTemplateRows.split(" ").length;
    document.body.removeChild(page);
    return [columns, rows];
}
