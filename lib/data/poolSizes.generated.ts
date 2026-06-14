// AUTO-GENERATED — do not edit by hand.
// Per-course question counts by topicRef and difficulty, precomputed from the
// in-memory bank so the Quiz Builder shows availability synchronously without
// importing the whole bank into the client or making an API call.
// Regenerate with: node scripts/gen-pool-sizes.js  (after adding questions)

import type { QuestionDifficulty } from "@/lib/types";

export const POOL_SIZES: Record<string, Record<string, Record<QuestionDifficulty, number>>> =
{
  "a-level-maths": {
    "a1": {
      "Foundation": 45,
      "Standard": 0,
      "Challenge": 0
    },
    "a2": {
      "Foundation": 48,
      "Standard": 1,
      "Challenge": 1
    },
    "a3": {
      "Foundation": 52,
      "Standard": 0,
      "Challenge": 0
    },
    "a4": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 0
    },
    "a5": {
      "Foundation": 40,
      "Standard": 0,
      "Challenge": 0
    },
    "a6": {
      "Foundation": 59,
      "Standard": 0,
      "Challenge": 0
    },
    "BE": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 15
    },
    "CG1": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "CG2": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 20
    },
    "CG3": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "cg4": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 0
    },
    "cg5": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "d1": {
      "Foundation": 35,
      "Standard": 28,
      "Challenge": 7
    },
    "d2": {
      "Foundation": 35,
      "Standard": 32,
      "Challenge": 3
    },
    "d3": {
      "Foundation": 35,
      "Standard": 30,
      "Challenge": 5
    },
    "d4": {
      "Foundation": 35,
      "Standard": 30,
      "Challenge": 5
    },
    "d5": {
      "Foundation": 51,
      "Standard": 19,
      "Challenge": 0
    },
    "el1": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "el2": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "el3": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "el4": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "el5": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "el6": {
      "Foundation": 82,
      "Standard": 8,
      "Challenge": 0
    },
    "i1": {
      "Foundation": 41,
      "Standard": 29,
      "Challenge": 0
    },
    "i2": {
      "Foundation": 40,
      "Standard": 30,
      "Challenge": 0
    },
    "ise1": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "ise2": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "ise4": {
      "Foundation": 20,
      "Standard": 20,
      "Challenge": 10
    },
    "ise5": {
      "Foundation": 18,
      "Standard": 20,
      "Challenge": 12
    },
    "qc1": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "qc2": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "qc3": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "qc4": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "qc5": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "qc6": {
      "Foundation": 60,
      "Standard": 0,
      "Challenge": 0
    },
    "qc7": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 0
    },
    "qc8": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 0
    },
    "qc9": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 0
    },
    "qc10": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 0
    },
    "qc11": {
      "Foundation": 50,
      "Standard": 0,
      "Challenge": 0
    },
    "s1": {
      "Foundation": 43,
      "Standard": 17,
      "Challenge": 0
    },
    "s2": {
      "Foundation": 41,
      "Standard": 19,
      "Challenge": 0
    },
    "s3": {
      "Foundation": 60,
      "Standard": 0,
      "Challenge": 0
    },
    "s4": {
      "Foundation": 60,
      "Standard": 0,
      "Challenge": 0
    },
    "s5": {
      "Foundation": 30,
      "Standard": 0,
      "Challenge": 0
    },
    "t1": {
      "Foundation": 70,
      "Standard": 0,
      "Challenge": 0
    },
    "t2": {
      "Foundation": 40,
      "Standard": 15,
      "Challenge": 15
    },
    "t3": {
      "Foundation": 40,
      "Standard": 15,
      "Challenge": 15
    },
    "t4": {
      "Foundation": 54,
      "Standard": 7,
      "Challenge": 9
    },
    "t5": {
      "Foundation": 0,
      "Standard": 12,
      "Challenge": 18
    },
    "v1": {
      "Foundation": 8,
      "Standard": 29,
      "Challenge": 23
    },
    "v2": {
      "Foundation": 12,
      "Standard": 30,
      "Challenge": 18
    },
    "v3": {
      "Foundation": 30,
      "Standard": 0,
      "Challenge": 0
    },
    "y1f1": {
      "Foundation": 8,
      "Standard": 16,
      "Challenge": 16
    },
    "y1f2": {
      "Foundation": 8,
      "Standard": 16,
      "Challenge": 16
    },
    "y1ht1": {
      "Foundation": 10,
      "Standard": 18,
      "Challenge": 12
    },
    "y1ht2": {
      "Foundation": 10,
      "Standard": 18,
      "Challenge": 12
    },
    "y1ht3": {
      "Foundation": 10,
      "Standard": 18,
      "Challenge": 12
    },
    "y1k1": {
      "Foundation": 10,
      "Standard": 16,
      "Challenge": 14
    },
    "y1k2": {
      "Foundation": 10,
      "Standard": 16,
      "Challenge": 14
    },
    "y1pr1": {
      "Foundation": 22,
      "Standard": 28,
      "Challenge": 10
    },
    "y1sd1": {
      "Foundation": 9,
      "Standard": 12,
      "Challenge": 9
    },
    "y1sd2": {
      "Foundation": 9,
      "Standard": 12,
      "Challenge": 9
    },
    "y1sd3": {
      "Foundation": 9,
      "Standard": 12,
      "Challenge": 9
    },
    "y1sd4": {
      "Foundation": 9,
      "Standard": 12,
      "Challenge": 9
    },
    "y2am1": {
      "Foundation": 5,
      "Standard": 20,
      "Challenge": 6
    },
    "y2am2": {
      "Foundation": 22,
      "Standard": 43,
      "Challenge": 6
    },
    "y2am3": {
      "Foundation": 13,
      "Standard": 49,
      "Challenge": 9
    },
    "y2am4": {
      "Foundation": 0,
      "Standard": 38,
      "Challenge": 33
    },
    "y2am5": {
      "Foundation": 10,
      "Standard": 38,
      "Challenge": 23
    },
    "y2be1": {
      "Foundation": 5,
      "Standard": 16,
      "Challenge": 19
    },
    "y2be2": {
      "Foundation": 2,
      "Standard": 37,
      "Challenge": 32
    },
    "y2be3": {
      "Foundation": 3,
      "Standard": 42,
      "Challenge": 26
    },
    "y2bn": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2cp": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2cr": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2cu": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2df1": {
      "Foundation": 25,
      "Standard": 38,
      "Challenge": 8
    },
    "y2df2": {
      "Foundation": 43,
      "Standard": 27,
      "Challenge": 1
    },
    "y2df3": {
      "Foundation": 14,
      "Standard": 33,
      "Challenge": 24
    },
    "y2df4": {
      "Foundation": 6,
      "Standard": 34,
      "Challenge": 31
    },
    "y2df5": {
      "Foundation": 3,
      "Standard": 32,
      "Challenge": 36
    },
    "y2df6": {
      "Foundation": 11,
      "Standard": 36,
      "Challenge": 24
    },
    "y2df7": {
      "Foundation": 12,
      "Standard": 36,
      "Challenge": 23
    },
    "y2df8": {
      "Foundation": 5,
      "Standard": 25,
      "Challenge": 41
    },
    "y2df9": {
      "Foundation": 13,
      "Standard": 33,
      "Challenge": 25
    },
    "y2df10": {
      "Foundation": 6,
      "Standard": 28,
      "Challenge": 37
    },
    "y2fg1": {
      "Foundation": 21,
      "Standard": 32,
      "Challenge": 18
    },
    "y2fg2": {
      "Foundation": 12,
      "Standard": 50,
      "Challenge": 9
    },
    "y2fg3": {
      "Foundation": 19,
      "Standard": 20,
      "Challenge": 32
    },
    "y2fg4": {
      "Foundation": 13,
      "Standard": 18,
      "Challenge": 40
    },
    "y2fg5": {
      "Foundation": 33,
      "Standard": 65,
      "Challenge": 43
    },
    "y2fg6": {
      "Foundation": 25,
      "Standard": 53,
      "Challenge": 63
    },
    "y2fg7": {
      "Foundation": 18,
      "Standard": 21,
      "Challenge": 102
    },
    "y2hc": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2hm": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2hp": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2in1": {
      "Foundation": 39,
      "Standard": 30,
      "Challenge": 2
    },
    "y2in2": {
      "Foundation": 13,
      "Standard": 51,
      "Challenge": 7
    },
    "y2in3": {
      "Foundation": 10,
      "Standard": 38,
      "Challenge": 23
    },
    "y2in4": {
      "Foundation": 7,
      "Standard": 50,
      "Challenge": 14
    },
    "y2in5": {
      "Foundation": 6,
      "Standard": 48,
      "Challenge": 17
    },
    "y2in6": {
      "Foundation": 1,
      "Standard": 36,
      "Challenge": 34
    },
    "y2in7": {
      "Foundation": 5,
      "Standard": 42,
      "Challenge": 24
    },
    "y2in8": {
      "Foundation": 10,
      "Standard": 41,
      "Challenge": 20
    },
    "y2in9": {
      "Foundation": 12,
      "Standard": 41,
      "Challenge": 18
    },
    "y2in10": {
      "Foundation": 9,
      "Standard": 31,
      "Challenge": 31
    },
    "y2ld": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2na": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2nm": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2nm1": {
      "Foundation": 7,
      "Standard": 15,
      "Challenge": 8
    },
    "y2nm2": {
      "Foundation": 15,
      "Standard": 39,
      "Challenge": 16
    },
    "y2nm3": {
      "Foundation": 18,
      "Standard": 34,
      "Challenge": 18
    },
    "y2nm4": {
      "Foundation": 18,
      "Standard": 32,
      "Challenge": 20
    },
    "y2nm5": {
      "Foundation": 20,
      "Standard": 30,
      "Challenge": 20
    },
    "y2pe1": {
      "Foundation": 29,
      "Standard": 33,
      "Challenge": 9
    },
    "y2pe2": {
      "Foundation": 20,
      "Standard": 30,
      "Challenge": 21
    },
    "y2pe3": {
      "Foundation": 23,
      "Standard": 33,
      "Challenge": 15
    },
    "y2pe4": {
      "Foundation": 16,
      "Standard": 39,
      "Challenge": 16
    },
    "y2po": {
      "Foundation": 22,
      "Standard": 27,
      "Challenge": 22
    },
    "y2ss1": {
      "Foundation": 21,
      "Standard": 37,
      "Challenge": 13
    },
    "y2ss2": {
      "Foundation": 20,
      "Standard": 30,
      "Challenge": 21
    },
    "y2ss3": {
      "Foundation": 20,
      "Standard": 30,
      "Challenge": 21
    },
    "y2ss4": {
      "Foundation": 20,
      "Standard": 20,
      "Challenge": 31
    },
    "y2tf1": {
      "Foundation": 33,
      "Standard": 30,
      "Challenge": 63
    },
    "y2tf2": {
      "Foundation": 15,
      "Standard": 20,
      "Challenge": 36
    },
    "y2tf3": {
      "Foundation": 19,
      "Standard": 24,
      "Challenge": 28
    },
    "y2tf4": {
      "Foundation": 14,
      "Standard": 29,
      "Challenge": 28
    },
    "y2tf5": {
      "Foundation": 13,
      "Standard": 27,
      "Challenge": 31
    },
    "y2tf6": {
      "Foundation": 15,
      "Standard": 28,
      "Challenge": 28
    },
    "y2tf7": {
      "Foundation": 15,
      "Standard": 20,
      "Challenge": 36
    },
    "y2tf8": {
      "Foundation": 12,
      "Standard": 31,
      "Challenge": 28
    },
    "y2tf9": {
      "Foundation": 24,
      "Standard": 18,
      "Challenge": 29
    },
    "y2v1": {
      "Foundation": 20,
      "Standard": 20,
      "Challenge": 31
    },
    "y2v2": {
      "Foundation": 20,
      "Standard": 20,
      "Challenge": 31
    }
  },
  "a-level-further-maths": {},
  "gcse-maths": {
    "gn01": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn02": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn03": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn04": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn05": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn06": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn07": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn08": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn09": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn10": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn11": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn12": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn13": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn14": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn15": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn16": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn17": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn18": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn19": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn20": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn21": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn22": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn23": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn28": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn29": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn30": {
      "Foundation": 24,
      "Standard": 23,
      "Challenge": 23
    },
    "gn33": {
      "Foundation": 12,
      "Standard": 10,
      "Challenge": 8
    },
    "gn34": {
      "Foundation": 12,
      "Standard": 10,
      "Challenge": 8
    },
    "gn35": {
      "Foundation": 12,
      "Standard": 10,
      "Challenge": 8
    }
  },
  "undergrad-maths": {
    "am1a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am1b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am1c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am1d": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am2a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am2b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am2c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am2d": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am3a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am3b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am3c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am3d": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am4a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am4b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am4c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am4d": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am5a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am5b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am5c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am5d": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am6a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am6b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am6c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am7a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am7b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am7c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am7d": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am8a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am8b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am8c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am8d": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am9a": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am9b": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    },
    "am9c": {
      "Foundation": 6,
      "Standard": 12,
      "Challenge": 12
    }
  }
};
