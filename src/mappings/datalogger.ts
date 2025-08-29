import { DataStored } from "../../generated/DataLogger/DataLogger"
import { DataEntry } from "../../generated/schema"

export function handleDataStored(event: DataStored): void {
  let entry = new DataEntry(event.transaction.hash.toHex())
  entry.sender = event.params.sender
  entry.data = event.params.data
  entry.save()
}
