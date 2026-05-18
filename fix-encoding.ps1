$root = "c:\Users\shell\OneDrive\Desktop\H4 Systems\H4-Systems-Website"
Get-ChildItem -Path $root -Recurse -Filter "*.tsx" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    # curly double quotes -> straight
    $content = $content.Replace([char]0x201C, '"').Replace([char]0x201D, '"')
    # curly single quotes -> straight
    $content = $content.Replace([char]0x2018, "'").Replace([char]0x2019, "'")
    # mojibake arrow (U+00E2 U+2020 U+2019) -> plain ASCII arrow
    $content = $content.Replace("`u{00E2}`u{2020}`u{2019}", "->")
    # box drawing dash -> hyphen
    $content = $content.Replace([char]0x2500, "-")
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.UTF8Encoding]::new($false))
}
Write-Host "Done"
