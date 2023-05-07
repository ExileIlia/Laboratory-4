for (i = 0; i < document.links.length; i++) {
    document.sel.listOfLinks.options[i] = new Option(
      document.links[i],
      i,
      false,
      false
    );
  }

  document.sel.listOfLinks.selectedIndex = 0;