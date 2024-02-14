import { CubeColorType, GardenInfoType } from '@/types';

const colorInfo: CubeColorType[] = [
  {
    ceil: '#D4EDC3',
    side1: '#C9E2AF',
    side2: '#B1D195',
  },
  {
    ceil: '#B3D8AB',
    side1: '#99C490',
    side2: '#7EAF74',
  },
  {
    ceil: '#81AF7E',
    side1: '#709B6D',
    side2: '#5D845B',
  },
  {
    ceil: '#567754',
    side1: '#4C6B4A',
    side2: '#425B40',
  },
];

const userInfos: GardenInfoType[] = [
  // { date: 0, week: 1, count: 13, id: 1 },
  // { date: 1, week: 1, count: 1, id: 2 },
  // { date: 2, week: 1, count: 12, id: 3 },
  // { date: 3, week: 1, count: 10, id: 4 },
  { date: 4, week: 1, count: 8, id: 5 },
  { date: 5, week: 1, count: 10, id: 6 },
  { date: 6, week: 1, count: 1, id: 7 },
  { date: 0, week: 2, count: 12, id: 8 },
  { date: 1, week: 2, count: 9, id: 9 },
  { date: 2, week: 2, count: 1, id: 10 },
  { date: 3, week: 2, count: 2, id: 11 },
  { date: 4, week: 2, count: 7, id: 12 },
  { date: 5, week: 2, count: 5, id: 13 },
  { date: 6, week: 2, count: 4, id: 14 },
  { date: 0, week: 3, count: 8, id: 15 },
  { date: 1, week: 3, count: 1, id: 16 },
  { date: 2, week: 3, count: 0, id: 17 },
  { date: 3, week: 3, count: 6, id: 18 },
  { date: 4, week: 3, count: 7, id: 19 },
  { date: 5, week: 3, count: 1, id: 20 },
  { date: 6, week: 3, count: 11, id: 21 },
  { date: 0, week: 4, count: 8, id: 22 },
  { date: 1, week: 4, count: 12, id: 23 },
  { date: 2, week: 4, count: 9, id: 24 },
  { date: 3, week: 4, count: 2, id: 25 },
  { date: 4, week: 4, count: 5, id: 26 },
  { date: 5, week: 4, count: 2, id: 27 },
  { date: 6, week: 4, count: 13, id: 28 },
  { date: 0, week: 5, count: 7, id: 29 },
  { date: 1, week: 5, count: 10, id: 30 },
  { date: 2, week: 5, count: 14, id: 31 },
  { date: 3, week: 5, count: 12, id: 32 },
  { date: 4, week: 5, count: 12, id: 33 },
  { date: 5, week: 5, count: 3, id: 34 },
  { date: 6, week: 5, count: 14, id: 35 },
  { date: 0, week: 6, count: 12, id: 36 },
  { date: 1, week: 6, count: 13, id: 37 },
  { date: 2, week: 6, count: 1, id: 38 },
  { date: 3, week: 6, count: 1, id: 39 },
  { date: 4, week: 6, count: 7, id: 40 },
  { date: 5, week: 6, count: 9, id: 41 },
  { date: 6, week: 6, count: 3, id: 42 },
  { date: 0, week: 7, count: 6, id: 43 },
  { date: 1, week: 7, count: 14, id: 44 },
  { date: 2, week: 7, count: 14, id: 45 },
  { date: 3, week: 7, count: 7, id: 46 },
  { date: 4, week: 7, count: 8, id: 47 },
  { date: 5, week: 7, count: 14, id: 48 },
  { date: 6, week: 7, count: 5, id: 49 },
  { date: 0, week: 8, count: 0, id: 50 },
  { date: 1, week: 8, count: 8, id: 51 },
  { date: 2, week: 8, count: 1, id: 52 },
  { date: 3, week: 8, count: 1, id: 53 },
  { date: 4, week: 8, count: 5, id: 54 },
  { date: 5, week: 8, count: 11, id: 55 },
  { date: 6, week: 8, count: 3, id: 56 },
  { date: 0, week: 9, count: 2, id: 57 },
  { date: 1, week: 9, count: 5, id: 58 },
  { date: 2, week: 9, count: 1, id: 59 },
  { date: 3, week: 9, count: 1, id: 60 },
  { date: 4, week: 9, count: 0, id: 61 },
  { date: 5, week: 9, count: 0, id: 62 },
  { date: 6, week: 9, count: 14, id: 63 },
  { date: 0, week: 10, count: 12, id: 64 },
  { date: 1, week: 10, count: 11, id: 65 },
  { date: 2, week: 10, count: 5, id: 66 },
  { date: 3, week: 10, count: 1, id: 67 },
  { date: 4, week: 10, count: 9, id: 68 },
  { date: 5, week: 10, count: 13, id: 69 },
  { date: 6, week: 10, count: 2, id: 70 },
  { date: 0, week: 11, count: 9, id: 71 },
  { date: 1, week: 11, count: 0, id: 72 },
  { date: 2, week: 11, count: 12, id: 73 },
  { date: 3, week: 11, count: 0, id: 74 },
  { date: 4, week: 11, count: 14, id: 75 },
  { date: 5, week: 11, count: 12, id: 76 },
  { date: 6, week: 11, count: 14, id: 77 },
  { date: 0, week: 12, count: 14, id: 78 },
  { date: 1, week: 12, count: 3, id: 79 },
  { date: 2, week: 12, count: 5, id: 80 },
  { date: 3, week: 12, count: 7, id: 81 },
  { date: 4, week: 12, count: 3, id: 82 },
  { date: 5, week: 12, count: 6, id: 83 },
  { date: 6, week: 12, count: 8, id: 84 },
  { date: 0, week: 13, count: 8, id: 85 },
  { date: 1, week: 13, count: 9, id: 86 },
  { date: 2, week: 13, count: 3, id: 87 },
  { date: 3, week: 13, count: 11, id: 88 },
  { date: 4, week: 13, count: 14, id: 89 },
  { date: 5, week: 13, count: 4, id: 90 },
  { date: 6, week: 13, count: 12, id: 91 },
  { date: 0, week: 14, count: 0, id: 92 },
  { date: 1, week: 14, count: 11, id: 93 },
  { date: 2, week: 14, count: 3, id: 94 },
  { date: 3, week: 14, count: 4, id: 95 },
  { date: 4, week: 14, count: 7, id: 96 },
  { date: 5, week: 14, count: 1, id: 97 },
  { date: 6, week: 14, count: 6, id: 98 },
  // { date: 0, week: 15, count: 9, id: 99 },
  // { date: 1, week: 15, count: 14, id: 100 },
  // { date: 2, week: 15, count: 0, id: 101 },
  // { date: 3, week: 15, count: 10, id: 102 },
  // { date: 4, week: 15, count: 14, id: 103 },
  // { date: 5, week: 15, count: 13, id: 104 },
  // { date: 6, week: 15, count: 2, id: 105 },
  // { date: 0, week: 16, count: 6, id: 106 },
  // { date: 1, week: 16, count: 2, id: 107 },
  // { date: 2, week: 16, count: 2, id: 108 },
  // { date: 3, week: 16, count: 12, id: 109 },
  // { date: 4, week: 16, count: 12, id: 110 },
  // { date: 5, week: 16, count: 7, id: 111 },
  // { date: 6, week: 16, count: 11, id: 112 },
  // { date: 0, week: 17, count: 1, id: 113 },
  // { date: 1, week: 17, count: 5, id: 114 },
  // { date: 2, week: 17, count: 11, id: 115 },
  // { date: 3, week: 17, count: 1, id: 116 },
  // { date: 4, week: 17, count: 0, id: 117 },
  // { date: 5, week: 17, count: 14, id: 118 },
  // { date: 6, week: 17, count: 4, id: 119 },
  // { date: 0, week: 18, count: 14, id: 120 },
  // { date: 1, week: 18, count: 10, id: 121 },
  // { date: 2, week: 18, count: 9, id: 122 },
  // { date: 3, week: 18, count: 6, id: 123 },
  // { date: 4, week: 18, count: 7, id: 124 },
  // { date: 5, week: 18, count: 12, id: 125 },
  // { date: 6, week: 18, count: 11, id: 126 },
  // { date: 0, week: 19, count: 6, id: 127 },
  // { date: 1, week: 19, count: 5, id: 128 },
  // { date: 2, week: 19, count: 9, id: 129 },
  // { date: 3, week: 19, count: 7, id: 130 },
  // { date: 4, week: 19, count: 12, id: 131 },
  // { date: 5, week: 19, count: 1, id: 132 },
  // { date: 6, week: 19, count: 2, id: 133 },
  // { date: 0, week: 20, count: 3, id: 134 },
  // { date: 1, week: 20, count: 6, id: 135 },
  // { date: 2, week: 20, count: 5, id: 136 },
  // { date: 3, week: 20, count: 1, id: 137 },
  // { date: 4, week: 20, count: 8, id: 138 },
  // { date: 5, week: 20, count: 14, id: 139 },
  // { date: 6, week: 20, count: 14, id: 140 },
  // { date: 0, week: 21, count: 13, id: 141 },
  // { date: 1, week: 21, count: 6, id: 142 },
  // { date: 2, week: 21, count: 2, id: 143 },
  // { date: 3, week: 21, count: 14, id: 144 },
  // { date: 4, week: 21, count: 3, id: 145 },
  // { date: 5, week: 21, count: 14, id: 146 },
  // { date: 6, week: 21, count: 0, id: 147 },
  // { date: 0, week: 22, count: 3, id: 148 },
  // { date: 1, week: 22, count: 13, id: 149 },
  // { date: 2, week: 22, count: 5, id: 150 },
  // { date: 3, week: 22, count: 10, id: 151 },
  // { date: 4, week: 22, count: 9, id: 152 },
  // { date: 5, week: 22, count: 6, id: 153 },
  // { date: 6, week: 22, count: 8, id: 154 },
  // { date: 0, week: 23, count: 8, id: 155 },
  // { date: 1, week: 23, count: 10, id: 156 },
  // { date: 2, week: 23, count: 11, id: 157 },
  // { date: 3, week: 23, count: 6, id: 158 },
  // { date: 4, week: 23, count: 1, id: 159 },
  // { date: 5, week: 23, count: 5, id: 160 },
  // { date: 6, week: 23, count: 14, id: 161 },
  // { date: 0, week: 24, count: 13, id: 162 },
  // { date: 1, week: 24, count: 14, id: 163 },
  // { date: 2, week: 24, count: 8, id: 164 },
  // { date: 3, week: 24, count: 1, id: 165 },
  // { date: 4, week: 24, count: 5, id: 166 },
  // { date: 5, week: 24, count: 13, id: 167 },
  // { date: 6, week: 24, count: 10, id: 168 },
  // { date: 0, week: 25, count: 14, id: 169 },
  // { date: 1, week: 25, count: 4, id: 170 },
  // { date: 2, week: 25, count: 9, id: 171 },
  // { date: 3, week: 25, count: 4, id: 172 },
  // { date: 4, week: 25, count: 2, id: 173 },
  // { date: 5, week: 25, count: 11, id: 174 },
  // { date: 6, week: 25, count: 3, id: 175 },
  // { date: 0, week: 26, count: 6, id: 176 },
  // { date: 1, week: 26, count: 2, id: 177 },
  // { date: 2, week: 26, count: 10, id: 178 },
  // { date: 3, week: 26, count: 9, id: 179 },
  // { date: 4, week: 26, count: 1, id: 180 },
  // { date: 5, week: 26, count: 7, id: 181 },
  // { date: 6, week: 26, count: 11, id: 182 },
  // { date: 0, week: 27, count: 2, id: 183 },
  // { date: 1, week: 27, count: 13, id: 184 },
  // { date: 2, week: 27, count: 5, id: 185 },
  // { date: 3, week: 27, count: 2, id: 186 },
  // { date: 4, week: 27, count: 9, id: 187 },
  // { date: 5, week: 27, count: 1, id: 188 },
  // { date: 6, week: 27, count: 8, id: 189 },
  // { date: 0, week: 28, count: 10, id: 190 },
  // { date: 1, week: 28, count: 14, id: 191 },
  // { date: 2, week: 28, count: 7, id: 192 },
  // { date: 3, week: 28, count: 0, id: 193 },
  // { date: 4, week: 28, count: 13, id: 194 },
  // { date: 5, week: 28, count: 8, id: 195 },
  // { date: 6, week: 28, count: 8, id: 196 },
  // { date: 0, week: 29, count: 3, id: 197 },
  // { date: 1, week: 29, count: 6, id: 198 },
  // { date: 2, week: 29, count: 3, id: 199 },
  // { date: 3, week: 29, count: 9, id: 200 },
  // { date: 4, week: 29, count: 11, id: 201 },
  // { date: 5, week: 29, count: 4, id: 202 },
  // { date: 6, week: 29, count: 13, id: 203 },
  // { date: 0, week: 30, count: 13, id: 204 },
  // { date: 1, week: 30, count: 8, id: 205 },
  // { date: 2, week: 30, count: 8, id: 206 },
  // { date: 3, week: 30, count: 11, id: 207 },
  // { date: 4, week: 30, count: 10, id: 208 },
  // { date: 5, week: 30, count: 4, id: 209 },
  // { date: 6, week: 30, count: 13, id: 210 },
  // { date: 0, week: 31, count: 3, id: 211 },
  // { date: 1, week: 31, count: 3, id: 212 },
  // { date: 2, week: 31, count: 9, id: 213 },
  // { date: 3, week: 31, count: 12, id: 214 },
  // { date: 4, week: 31, count: 2, id: 215 },
  // { date: 5, week: 31, count: 6, id: 216 },
  // { date: 6, week: 31, count: 14, id: 217 },
  // { date: 0, week: 32, count: 3, id: 218 },
  // { date: 1, week: 32, count: 0, id: 219 },
  // { date: 2, week: 32, count: 8, id: 220 },
  // { date: 3, week: 32, count: 5, id: 221 },
  // { date: 4, week: 32, count: 14, id: 222 },
  // { date: 5, week: 32, count: 7, id: 223 },
  // { date: 6, week: 32, count: 5, id: 224 },
  // { date: 0, week: 33, count: 4, id: 225 },
  // { date: 1, week: 33, count: 0, id: 226 },
  // { date: 2, week: 33, count: 5, id: 227 },
  // { date: 3, week: 33, count: 14, id: 228 },
  // { date: 4, week: 33, count: 14, id: 229 },
  // { date: 5, week: 33, count: 1, id: 230 },
  // { date: 6, week: 33, count: 9, id: 231 },
  // { date: 0, week: 34, count: 2, id: 232 },
  // { date: 1, week: 34, count: 12, id: 233 },
  // { date: 2, week: 34, count: 14, id: 234 },
  // { date: 3, week: 34, count: 7, id: 235 },
  // { date: 4, week: 34, count: 12, id: 236 },
  // { date: 5, week: 34, count: 0, id: 237 },
  // { date: 6, week: 34, count: 4, id: 238 },
  // { date: 0, week: 35, count: 8, id: 239 },
  // { date: 1, week: 35, count: 11, id: 240 },
  // { date: 2, week: 35, count: 2, id: 241 },
  // { date: 3, week: 35, count: 3, id: 242 },
  // { date: 4, week: 35, count: 14, id: 243 },
  // { date: 5, week: 35, count: 3, id: 244 },
  // { date: 6, week: 35, count: 1, id: 245 },
  // { date: 0, week: 36, count: 8, id: 246 },
  // { date: 1, week: 36, count: 10, id: 247 },
  // { date: 2, week: 36, count: 7, id: 248 },
  // { date: 3, week: 36, count: 11, id: 249 },
  // { date: 4, week: 36, count: 10, id: 250 },
  // { date: 5, week: 36, count: 0, id: 251 },
  // { date: 6, week: 36, count: 1, id: 252 },
  // { date: 0, week: 37, count: 1, id: 253 },
  // { date: 1, week: 37, count: 0, id: 254 },
  // { date: 2, week: 37, count: 13, id: 255 },
  // { date: 3, week: 37, count: 5, id: 256 },
  // { date: 4, week: 37, count: 0, id: 257 },
  // { date: 5, week: 37, count: 11, id: 258 },
  // { date: 6, week: 37, count: 4, id: 259 },
  // { date: 0, week: 38, count: 6, id: 260 },
  // { date: 1, week: 38, count: 12, id: 261 },
  // { date: 2, week: 38, count: 5, id: 262 },
  // { date: 3, week: 38, count: 8, id: 263 },
  // { date: 4, week: 38, count: 1, id: 264 },
  // { date: 5, week: 38, count: 12, id: 265 },
  // { date: 6, week: 38, count: 8, id: 266 },
  // { date: 0, week: 39, count: 14, id: 267 },
  // { date: 1, week: 39, count: 12, id: 268 },
  // { date: 2, week: 39, count: 12, id: 269 },
  // { date: 3, week: 39, count: 14, id: 270 },
  // { date: 4, week: 39, count: 0, id: 271 },
  // { date: 5, week: 39, count: 6, id: 272 },
  // { date: 6, week: 39, count: 2, id: 273 },
  // { date: 0, week: 40, count: 14, id: 274 },
  // { date: 1, week: 40, count: 9, id: 275 },
  // { date: 2, week: 40, count: 10, id: 276 },
  // { date: 3, week: 40, count: 8, id: 277 },
  // { date: 4, week: 40, count: 11, id: 278 },
  // { date: 5, week: 40, count: 3, id: 279 },
  // { date: 6, week: 40, count: 11, id: 280 },
  // { date: 0, week: 41, count: 6, id: 281 },
  // { date: 1, week: 41, count: 10, id: 282 },
  // { date: 2, week: 41, count: 13, id: 283 },
  // { date: 3, week: 41, count: 14, id: 284 },
  // { date: 4, week: 41, count: 10, id: 285 },
  // { date: 5, week: 41, count: 3, id: 286 },
  // { date: 6, week: 41, count: 4, id: 287 },
  // { date: 0, week: 42, count: 11, id: 288 },
  // { date: 1, week: 42, count: 14, id: 289 },
  // { date: 2, week: 42, count: 1, id: 290 },
  // { date: 3, week: 42, count: 9, id: 291 },
  // { date: 4, week: 42, count: 3, id: 292 },
  // { date: 5, week: 42, count: 13, id: 293 },
  // { date: 6, week: 42, count: 3, id: 294 },
  // { date: 0, week: 43, count: 5, id: 295 },
  // { date: 1, week: 43, count: 10, id: 296 },
  // { date: 2, week: 43, count: 11, id: 297 },
  // { date: 3, week: 43, count: 11, id: 298 },
  // { date: 4, week: 43, count: 14, id: 299 },
  // { date: 5, week: 43, count: 0, id: 300 },
  // { date: 6, week: 43, count: 10, id: 301 },
  // { date: 0, week: 44, count: 14, id: 302 },
  // { date: 1, week: 44, count: 6, id: 303 },
  // { date: 2, week: 44, count: 12, id: 304 },
  // { date: 3, week: 44, count: 6, id: 305 },
  // { date: 4, week: 44, count: 7, id: 306 },
  // { date: 5, week: 44, count: 0, id: 307 },
  // { date: 6, week: 44, count: 6, id: 308 },
  // { date: 0, week: 45, count: 4, id: 309 },
  // { date: 1, week: 45, count: 3, id: 310 },
  // { date: 2, week: 45, count: 2, id: 311 },
  // { date: 3, week: 45, count: 2, id: 312 },
  // { date: 4, week: 45, count: 13, id: 313 },
  // { date: 5, week: 45, count: 7, id: 314 },
  // { date: 6, week: 45, count: 9, id: 315 },
  // { date: 0, week: 46, count: 9, id: 316 },
  // { date: 1, week: 46, count: 11, id: 317 },
  // { date: 2, week: 46, count: 5, id: 318 },
  // { date: 3, week: 46, count: 12, id: 319 },
  // { date: 4, week: 46, count: 2, id: 320 },
  // { date: 5, week: 46, count: 6, id: 321 },
  // { date: 6, week: 46, count: 6, id: 322 },
  // { date: 0, week: 47, count: 13, id: 323 },
  // { date: 1, week: 47, count: 12, id: 324 },
  // { date: 2, week: 47, count: 1, id: 325 },
  // { date: 3, week: 47, count: 10, id: 326 },
  // { date: 4, week: 47, count: 14, id: 327 },
  // { date: 5, week: 47, count: 4, id: 328 },
  // { date: 6, week: 47, count: 6, id: 329 },
  // { date: 0, week: 48, count: 14, id: 330 },
  // { date: 1, week: 48, count: 4, id: 331 },
  // { date: 2, week: 48, count: 1, id: 332 },
  // { date: 3, week: 48, count: 5, id: 333 },
  // { date: 4, week: 48, count: 2, id: 334 },
  // { date: 5, week: 48, count: 5, id: 335 },
  // { date: 6, week: 48, count: 3, id: 336 },
  // { date: 0, week: 49, count: 2, id: 337 },
  // { date: 1, week: 49, count: 5, id: 338 },
  // { date: 2, week: 49, count: 9, id: 339 },
  // { date: 3, week: 49, count: 13, id: 340 },
  // { date: 4, week: 49, count: 0, id: 341 },
  // { date: 5, week: 49, count: 4, id: 342 },
  // { date: 6, week: 49, count: 7, id: 343 },
  // { date: 0, week: 50, count: 14, id: 344 },
  // { date: 1, week: 50, count: 11, id: 345 },
  // { date: 2, week: 50, count: 1, id: 346 },
  // { date: 3, week: 50, count: 0, id: 347 },
  // { date: 4, week: 50, count: 14, id: 348 },
  // { date: 5, week: 50, count: 7, id: 349 },
  // { date: 6, week: 50, count: 12, id: 350 },
  // { date: 0, week: 51, count: 2, id: 351 },
  // { date: 1, week: 51, count: 5, id: 352 },
  // { date: 2, week: 51, count: 10, id: 353 },
  // { date: 3, week: 51, count: 0, id: 354 },
  // { date: 4, week: 51, count: 2, id: 355 },
  // { date: 5, week: 51, count: 4, id: 356 },
  // { date: 6, week: 51, count: 10, id: 357 },
  // { date: 0, week: 52, count: 2, id: 358 },
  // { date: 1, week: 52, count: 8, id: 359 },
  // { date: 2, week: 52, count: 8, id: 360 },
  // { date: 3, week: 52, count: 8, id: 361 },
  // { date: 4, week: 52, count: 5, id: 362 },
  // { date: 5, week: 52, count: 9, id: 363 },
  // { date: 6, week: 52, count: 5, id: 364 },
];

export { colorInfo, userInfos };