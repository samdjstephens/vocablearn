import pandas as pd
import json
import sys

df = pd.read_csv(sys.argv[1])
df['eng'] = df['eng'].str.lower()
df['ltu'] = df['ltu'].str.lower()
df['ans'] = None

with open("words.json","w") as f:
    json.dump(df.to_dict(orient='records'), f,
              ensure_ascii=False, indent=2, encoding='utf-8')
