1. General Information
Characteristics of the target business audience:
The business recipients of the system are organizers of karate tournaments compliant with
WKF (World Karate Federation) guidelines. Organizers are responsible for
comprehensive preparation and conduct of competitions, including creating brackets and
schedules, assigning referees, and managing logistical resources. The system
must enable simultaneous access by multiple users and ensure stable operation in
real time, especially during periods of highest load during the tournament.

Product purpose: The system supports comprehensive management of karate tournaments
by creating brackets and competition schedules, registering participants,
automatically recording results, and generating current rankings.

Basic assumptions and conditions that the product should meet:
- Intuitive and simple operation for users with varying experience, including
coaches and competitors monitoring schedules and results.
- Stable system operation under high load and the ability for simultaneous
login by multiple users.
- Support for both the preparatory phase of the tournament and its conduct in real
time.
- Management of logistical resources, including:
o number and allocation of stations/segments of mats for main competitions,
o additional stations for warm-up (e.g. 2 additional),
o mat surface designated for breaks and competitor rest,
o number of referees and summaries regarding medals, diplomas, and other
awards.
- Verification of formal requirements for competitors (age, weight, club
affiliation).
- Automatic generation of reports and summaries supporting organizational
and logistical decisions.

Expected business benefits:
- Standardization of organizational procedures and unification of tournament preparation.
- Automation of registration processes, generating brackets, schedules, and
logistical summaries, which shortens competition service time.
- Transparency of results through current generation of rankings and
leaderboards.
- Efficient use of logistical resources, including mats, stations,
referees, and awards, which increases organizational efficiency.
- Facilitation of access to information for coaches and competitors, increasing
participant satisfaction.

2. Context Diagram
[Note: Diagram mentioned but not provided in source]

3. Actors

Organizer:
Entering available resources, competitions, and number of referees into the system.
Additionally, they are responsible for establishing limitations for the tournament, e.g., how many
competitors maximum a given coach can register for the competition.

Coach:
Entering competitors into the system. Viewing how a given competitor under their
supervision is performing at the competition and checking their schedule.

Referee:
Entering competitor scores and penalties. They have a separate interface for
entering results (1 referee is responsible for entering all
results). They have access to the schedule of competitions they are to referee with
the mat number and time provided.

Competitor:
Checking the schedule of competitions they are registered for. Additionally has
access to view their own scores and those of other competitors, as well as rankings and
competition brackets.

System Administrator:
Responsible for the operation of the entire system, including monitoring its operation, fixing
errors, etc. Additionally, they are responsible for granting permissions in the system
to its users.

4. Functional Requirements

4.1. Use Case Diagram
[Note: Diagram mentioned but not provided in source]

4.2. Use Cases

1. Competitor checks ranking
Attributes:
Main Actor: Competitor
Priority: Medium
Main scenario:
1. Competitor wants to check their current ranking.
2. Competitor logs into the system (or system identifies the competitor if already
logged in).
3. Competitor selects the "My ranking" / "Rankings" option.
4. System retrieves ranking data assigned to the competitor (age category/weight/discipline).
5. System displays the competitor's current ranking — position, points, date
of last update, and comparison (e.g., change in position from previous ranking).
6. Competitor reviews details (e.g., list of recent results affecting the
ranking).

Extensions:
3.A. Competitor is not logged in.
3.A.1. System displays message: "Log in to see ranking" and
redirects to login screen.
4.A. No assigned category (age/weight/discipline) for the competitor.
4.A.1. System informs the competitor about the lack of assigned category and asks to
complete profile data (or contact the organizer).
5.A. Ranking temporarily unavailable (data retrieval error).
5.A.1. System displays message about technical problem and suggests
trying again later.
5.B. Competitor is not found in any ranking (e.g., no points).
5.B.1. System informs: "No valid ranking for this competitor" and
(optionally) displays information about what results are needed to qualify.

2. Downloading the list of equipment and awards required by
the organizer
Attributes:
Main Actor: Organizer
Priority: High
Main scenario:
1. Organizer wants to obtain a list of equipment and awards needed to
conduct the tournament.
2. Organizer logs into the organizer panel (or system identifies
organizer).
3. Organizer selects the "Equipment and awards list" / "Organizational
requirements" option.
4. System generates and presents a list of elements: equipment (mats, protectors,
timers, etc.), quantities, minimum specifications, and suggested sources/suppliers (if
available), and a list of awards (trophies, medals, diplomas, material awards) with number
of pieces and categories.
5. Organizer can download the list in print/export format (e.g.,
PDF/CSV) or edit quantities.
6. System saves any changes and confirms creation/export of the list.

Extensions:
3.A. Organizer does not have appropriate permissions (e.g., volunteer account
instead of organizer).
3.A.1. System informs about lack of permissions and displays instructions to
contact the administrator.
4.A. No defined equipment standards for the given discipline in
the system.
4.A.1. System informs the organizer about the lack of a predefined list and suggests:
a) manual addition of items, b) importing a template (if available), or c)
contacting the federation.
5.A. Export/printing attempt failed.
5.A.1. System displays error message and offers retry or
sending the list to the organizer's email address.
5.B. No planned categories/awards (e.g., undefined tournament
categories).
5.B.1. System informs that the awards list cannot be created until
categories are defined and indicates the place in the panel where to do this.

3. Coach downloads the list of disciplines and competitors participating in them
UC7: Downloading the list of disciplines and competitors
Attributes:
- Main Actor: Coach
- Priority: Medium
Main scenario:
1. Coach wants to check the list of disciplines available in the tournament.
2. System presents the list of tournament disciplines.
3. Coach selects one of the disciplines.
4. System displays the list of competitors assigned to the selected discipline.
5. Coach reviews competitor details

Extensions:
3.A. Selected discipline has no registered competitors.
3.A.1. System informs the coach about the lack of competitors in the given discipline.

4. Referee checks their presence/schedule
Attributes:
- Main actor: Referee
- Priority: High
Main scenario
1. Referee wants to check their presence at the tournament.
2. System identifies the referee.
3. System displays the schedule of fights assigned to the referee.
4. Referee confirms familiarization with the schedule.

Extensions:
3.A. Referee has no assigned schedule.
3.A.1. System informs the referee about the lack of scheduled fights.

UC-01: COMPETITOR CHECKS THEIR DISCIPLINES AND SCHEDULE AT THE COMPETITION
Main Actor: Competitor
Priority: Medium
Main scenario:
1. Competitor logs into the system or searches for themselves by first and last name.
2. System verifies data and displays the competitor's profile.
3. Competitor selects the "My competitions" option.
4. System displays a list of all competitor's competitions (kumite/kata, individual/team).
5. System displays detailed schedule: time, mat number, round, opponent/position, competition status.

Extensions:
E1 Competitor not found in the system
E1.1 System displays error message and suggests contacting the coach.
E2 Server connection error
E2.1 System displays last downloaded data with a warning about possible outdated information.

UC-02: COACH REGISTERS COMPETITORS
Main Actor: Coach
Priority: High
Main scenario:
1. Coach logs into the system.
2. System verifies data and displays the coach panel.
3. Coach selects a tournament from the list of available ones.
4. Coach fills in competitor data and selects competitions and categories.
5. System verifies competitor data: age, weight, medical examinations, availability of places.
6. Coach submits required documents and confirms registration.
7. System generates confirmation and sends notifications.

Extensions:
4.A Team registration
4.A.1 System requires indication of 3-7 team members.
4.A.2 Coach selects members from the club list.
4.A.3 System verifies all team members.
5.A Competitor does not meet formal requirements
5.A.1 System displays error message and suggests alternative categories.
5.A.2 Coach corrects data, selects another category, or withdraws.
5.B Place limit reached
5.B.1 System informs about lack of places.
5.B.2 Coach registers competitor for another competition.
E1 Registration deadline has passed
E1.1 System displays message about deadline expiration and suggests contacting the organizer.

7. Referee records competition results
Priority: High
General description
Referee enters and records competitor scores during the competition.

Actors
- Main: Referee
- Supporting: Tournament management system

Trigger
Completion of competitor's performance or fight.

Main event flow
1. Referee selects competition.
2. Referee selects competitor.
3. Referee enters points.
4. System saves the result.

Extension points
3a. Incorrect points entered.

Alternative flows
3a. Incorrect points
System displays error message and re-enables
result entry.

8. Organizer enters competition
Priority: Medium
General description
Organizer adds a new competition to the tournament system.

Actors
- Main: Organizer
- Supporting: Tournament management system

Trigger
Creating tournament schedule.

Main event flow
1. Organizer selects the option to add competition.
2. Organizer enters competition data.
3. Organizer confirms data.
4. System saves the competition.

Extension points
2a. Missing required data.

Alternative flows
2a. Missing data
System displays message and enables data completion.

5. Non-functional Requirements

The following non-functional requirements should be described:
- usability
- reliability
- performance
- security

6. System Model

6.1. Class Diagram
[Note: Diagram mentioned but not provided in source]

6.2. State Diagram
[Note: Diagram mentioned but not provided in source]

6.3. Sequence Diagram
[Note: Diagram mentioned but not provided in source]

6.4. Deployment Diagram
[Note: Diagram mentioned but not provided in source]

2. Organization of martial arts tournament using Karate as an example
Application for organizing Karate tournament

1. General Information
Potential recipients: Karate sports clubs, sports associations

Product purpose: Organizing karate tournament:
- constructing competitor brackets,
- recording competitor participation,
- determining competition sequence and overall timeline,
- recording individual competitor results and leaderboard,
- adding results of individual matches/competitions,
- Resources in the form of mats and the number and type of competitions that can take place at the
same time:
- verification of competitor requirements (system)

Individual kata male (age), Individual kata female (age), Team kata
male (age), Team kata female (age),
Individual kumite male (age, weight), Team kumite male (age, weight),
Individual kumite female (age, weight), Team kumite female (age, weight)

Basic assumptions and conditions:
- verification of competitor requirements (system)

Expected business benefits:
- project standardization (readability),
- time savings for competitors and organizers - exact time of tournament
and individual disciplines,
- transparency of scoring
