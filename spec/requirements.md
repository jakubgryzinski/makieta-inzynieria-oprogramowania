/auth
/zawodnik
  ├── /dashboard
  ├── /harmonogram
  ├── /ranking
  └── /drabinka
/trener
  ├── /dashboard
  ├── /rejestracja
  ├── /rejestracja-druzynowa
  ├── /zawodnicy
  └── /dyscypliny
/sedzia
  ├── /harmonogram
  └── /zapisywanie-wynikow
/organizator
  ├── /dashboard
  ├── /konfiguracja
  ├── /konkurencje
  ├── /zasoby
  └── /harmonogram
---
/auth
- 4 buttons: COMPETITOR, COACH, REFEREE, ORGANIZER
- Redirect to /[role]/dashboard (or /harmonogram for referee)
---
/zawodnik/dashboard
- Header: "Jan Kowalski"
- Upcoming match card:
  - "Men's kumite -67kg"
  - "15.01.2025 14:30"
  - "Mat 3"
  - "vs Adam Nowak"
---
/zawodnik/harmonogram
- Table (5 rows):
  - Competition | Time | Mat | Round | Opponent | Status
---
/zawodnik/ranking
- Card:
  - Position: 15
  - Change: +3
  - Points: 245
  - Update date: 10.01.2025
- Ranking table (10 rows):
  - Position | Competitor | Club | Points
  - Highlight row with own position
---
/zawodnik/drabinka
- Competition selection dropdown
- Bracket tree (16 participants)
- Highlight own position
---
/trener/dashboard
- Competitors table (5 rows):
  - First Name Last Name | Competitions | Next match
- Button "Register competitor" → /rejestracja
---
/trener/rejestracja
- Form:
  - Input "First name" (required)
  - Input "Last name" (required)
  - Input "Age" (required)
  - Input "Weight (kg)" (required)
  - Radio "Gender": M/F (required)
  - Checkbox "Medical examination" (required)
  - Checkbox "Individual kata"
  - Checkbox "Individual kumite"
  - Dropdown "Age category" (required)
  - Dropdown "Weight category" (required if kumite)
  - Button "Register"
Zod schema:
- imie: z.string().min(2)
- nazwisko: z.string().min(2)
- wiek: z.number().min(6).max(99)
- waga: z.number().min(20).max(150)
- plec: z.enum(["M", "K"])
- badania: z.boolean().refine(val => val === true, "Medical examination is required")
- konkurencje: z.array(z.string()).min(1, "Select at least one competition")
- kategoriaWiekowa: z.string().min(1, "Select age category")
- kategoriaWagowa: z.string().optional()
- refine: age must match kategoriaWiekowa
- refine: weight must match kategoriaWagowa (if kumite)
- refine: check category place limit
Success toast after registration: "Competitor has been successfully registered"
---
/trener/rejestracja-druzynowa
- Form:
  - Input "Team name" (required)
  - Radio "Type": Kata/Kumite (required)
  - Dropdown "Age category" (required)
  - Checkboxes competitor list (min 3, max 7)
  - Counter: "Selected: 4/7"
  - Button "Register"
Zod schema:
- nazwa: z.string().min(3).max(50)
- typ: z.enum(["kata", "kumite"])
- kategoriaWiekowa: z.string().min(1)
- czlonkowie: z.array(z.object()).min(3, "Team must have minimum 3 members").max(7, "Team can have maximum 7 members")
- refine: all members meet age requirements
- refine: all members meet weight requirements (if kumite)
Success toast: "Team has been successfully registered"
---
/trener/zawodnicy
- Table (8 rows):
  - First Name | Age | Competitions | Next match | Last result
---
/trener/dyscypliny
- Grid of cards (6 cards):
  - Discipline name
  - Number of participants
  - Status badge
  - Button "View participants"
- After clicking → participants table (15 rows):
  - Position | First Name | Club | Age | Weight
---
/sedzia/harmonogram
- Table (12 rows):
  - Time | Mat | Competition | Competitors | Status | Actions
  - Button "Enter result" in Actions column → /zapisywanie-wynikow
---
/sedzia/zapisywanie-wynikow
- Dropdown "Competition"
For KUMITE:
- Text readonly: "Jan Kowalski (Dragon Dojo)"
- Input "Points" (required)
- Text readonly: "Adam Nowak (Tiger Karate)"
- Input "Points" (required)
- Radio "Winner": Competitor1/Competitor2/Draw (required)
- Button "Save"
For KATA:
- Dropdown "Competitor"
- Text readonly: "Jan Kowalski (Dragon Dojo)"
- Input "Technical points" (required)
- Input "Athletic points" (required)
- Button "Save"
Zod KUMITE:
- punktyZawodnik1: z.number().int().min(0).max(10)
- punktyZawodnik2: z.number().int().min(0).max(10)
- zwyciezca: z.enum(["zawodnik1", "zawodnik2", "remis"], "You must select a winner")
Zod KATA:
- punktyTechniczne: z.number().min(0).max(10)
- punktyAtletyczne: z.number().min(0).max(10)
Success toast: "Result has been saved successfully"
---
/organizator/dashboard
- 4 statistics cards:
  - Competitors: 156
  - Competitions: 24
  - Mats: 6
  - Referees: 18
---
/organizator/konfiguracja
- Form:
  - Input "Tournament name" (required)
  - Date "Tournament date" (required)
  - Input "Location" (required)
  - Input number "Number of mats" (required)
  - Input number "Warm-up stations"
  - Input number "Rest stations"
  - Input number "Number of referees" (required)
  - Input number "Max competitors/coach" (required)
  - Button "Save"
Zod:
- nazwa: z.string().min(5).max(100)
- data: z.date()
- miejsce: z.string().min(3).max(100)
- liczbaMat: z.number().min(1).max(20)
- stanowiskaRozgrzewki: z.number().min(0).max(10).default(2)
- stanowiskaOdpoczynku: z.number().min(0).max(10).default(2)
- liczbaSedzow: z.number().min(1).max(100)
- maxZawodnikow: z.number().min(1).max(50)
Success toast: "Configuration has been saved"
---
/organizator/konkurencje
- Button "+ Add competition"
- Table (15 rows):
  - Name | Type | Gender | Age | Weight | Participants | Actions
  - Button "Delete" in Actions column
Add modal:
- Radio "Type": Kata/Kumite (required)
- Radio "Category": Individual/Team (required)
- Radio "Gender": M/F (required)
- Input "Age from" (required)
- Input "Age to" (required)
- Input "Weight from" (conditional: only if kumite, required)
- Input "Weight to" (conditional: only if kumite, required)
- Button "Add"
Zod:
- typ: z.enum(["kata", "kumite"])
- kategoria: z.enum(["indywidualne", "druzynowe"])
- plec: z.enum(["M", "K"])
- wiekOd: z.number().min(6).max(99)
- wiekDo: z.number().min(6).max(99)
- wagaOd: z.number().min(20).max(150).optional()
- wagaDo: z.number().min(20).max(150).optional()
- refine: (data) => data.wiekDo >= data.wiekOd, "Age to must be >= age from"
- refine: (data) => !data.wagaDo || data.wagaDo >= data.wagaOd, "Weight to must be >= weight from"
Success toast: "Competition has been added"
---
/organizator/zasoby
- Tab "Equipment" - table (6 rows):
  - Name | Quantity | Specification | Supplier
  - Tatami mats | 6 | 8x8m WKF | Sport-Maty Sp. z o.o.
  - Fist protectors | 156 pairs | Red/blue S-XL | Karate Shop
  - Foot protectors | 156 pairs | Red/blue S-XL | Karate Shop
  - Timers | 6 | Electronic WKF | TimerPro
  - Flags | 36 | Red/blue | Sport-Akcesoria
  - Referee vests | 18 | Black with WKF logo | Uniform Pro
- Tab "Awards" - table (dynamic, ~96 rows for 24 competitions):
  - Type | Competition | Quantity
  - Gold medal | Men's individual kata 14-15 | 1
  - Silver medal | Men's individual kata 14-15 | 1
  - Bronze medal | Men's individual kata 14-15 | 2
  - Trophy | Men's individual kata 14-15 | 3
  - (repeated for each of the 24 competitions)
- Button "Download PDF"
- Button "Download CSV"
---
/organizator/harmonogram
- Mat assignment table (20 rows, 30 min slots):
  - Time | Mat1 | Mat2 | Mat3 | Mat4 | Mat5 | Mat6 | Referees
  - 08:00 | Kata M 14-15 | Kumite F -50kg | - | - | - | - | Jan K., Anna S.
  - 08:30 | Kata M 14-15 | Kumite F -50kg | Kata F 16-17 | - | - | - | Jan K., Anna S., Piotr N.
  - ...
- Dropdown "Competition" + bracket tree for selected competition