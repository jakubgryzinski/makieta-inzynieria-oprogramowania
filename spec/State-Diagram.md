stateDiagram-v2
    [*] --> TworzenieTurnieju: Organizator inicjuje turniej
    
    TworzenieTurnieju --> KonfiguracjaTurnieju: Podanie podstawowych danych
    KonfiguracjaTurnieju --> KonfiguracjaTurnieju: Dodawanie konkurencji i mat
    
    KonfiguracjaTurnieju --> RejestracjaOtwarta: Otwarcie zapisów
    RejestracjaOtwarta --> RejestracjaOtwarta: Trenerzy zapisują zawodników
    
    RejestracjaOtwarta --> RejestracjaZamknieta: Koniec zapisów
    RejestracjaZamknieta --> GenerowanieHarmonogramu: System generuje drabinki
    
    GenerowanieHarmonogramu --> TurniejGotowy: Harmonogram zatwierdzony
    TurniejGotowy --> TurniejWTrakcie: Rozpoczęcie turnieju
    
    TurniejWTrakcie --> TurniejWTrakcie: Rozgrywanie konkurencji\nZapisywanie wyników
    
    TurniejWTrakcie --> TurniejZawieszony: Przerwa/problem
    TurniejZawieszony --> TurniejWTrakcie: Wznowienie
    
    TurniejWTrakcie --> TurniejZakonczony: Wszystkie konkurencje zakończone
    TurniejZakonczony --> GenerowanieRaportow: Tworzenie rankingów i raportów
    
    GenerowanieRaportow --> TurniejZarchiwizowany: Raporty gotowe
    TurniejZarchiwizowany --> [*]
    
    note right of TworzenieTurnieju
        Początek procesu
    end note
    
    note right of KonfiguracjaTurnieju
        Dodawanie konkurencji,
        mat, definiowanie kategorii
    end note
    
    note right of RejestracjaOtwarta
        Trenerzy zapisują
        zawodników do konkurencji
    end note
    
    note right of GenerowanieHarmonogramu
        System automatycznie
        tworzy drabinki i harmonogram
    end note
    
    note right of TurniejWTrakcie
        Sędziowie zapisują wyniki,
        zawodnicy sprawdzają harmonogram
    end note
    
    note right of GenerowanieRaportow
        Finalne rankingi,
        listy nagród, statystyki
    end note
