import pandas as pd
import json
import sys

df = pd.read_csv(sys.argv[1]).loc[:, ['group', 'eng', 'ltu']]
df['eng'] = df['eng'].str.lower()
df['eng'] = df['eng'].str.strip()
df['ltu'] = df['ltu'].str.lower()
df['ltu'] = df['ltu'].str.strip()
df['ans'] = None
out_json = (
    df.groupby('group')[['eng', 'ltu', 'ans']]
      .apply(lambda gdf: gdf.to_dict(orient='records'))
      .reset_index()
      .rename(columns={'group': 'name', 0: 'words'})
      .to_dict(orient='records')
)

with open("words.json","w") as f:
    json.dump(out_json, f,
              ensure_ascii=False, indent=2, encoding='utf-8')
