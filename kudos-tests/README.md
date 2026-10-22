# Kudos merge tests

End-to-end test for **Merge drafts**: drives the real page in a browser as a lead and two
teammates trading saved drafts, then checks what the merge did.

```sh
python3 kudos-tests/serve.py 8765 &          # from the repo root
google-chrome --headless=new --user-data-dir=/tmp/kudos-test-profile \
  http://127.0.0.1:8765/kudos-tests/e2e.html
cat kudos-tests/results.json                  # written when the run finishes
```

Or open `http://127.0.0.1:8765/kudos-tests/e2e.html` in a normal browser and watch it run.
Add `?stop` to halt right after the conflicting merge, to look at the conflict view.

## Templates check

`templates.html` applies every variant with the sample hosts and checks that each section gets a card,
headings and tables render, prompts are counted, off sections render when ticked, and `.docx` export works.
Run it the same way; `?v=type/variant,type/variant` checks only those.
