import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Stack } from "../components/Stack";
import { Box } from "../components/Box";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false }
];

export default function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        width: "$full",
        height: "$full",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Stack gap="$2">
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <Listbox.Button sx={{ bg: "$blue.500" }}>
            {selectedPerson.name}
          </Listbox.Button>
          <Listbox.Options>
            {people.map((person) => (
              <Listbox.Option
                key={person.id}
                value={person}
                disabled={person.unavailable}
              >
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </Stack>
    </Box>
  );
}
