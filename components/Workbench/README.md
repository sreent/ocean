# Workbench

a7c's builder, in Ocean: where people build a skill, the whole window given to the canvas, the way n8n's editor is. A showcase page, proposed.

- A rail of a7c's pages on the left, its mark on top: the frame's sidebar, shrunk to its icons.
- The toolbar says which skill this is, what the draft is (a draft of version 3, at revision 12), the tier it runs in, whether it's saved, and its problems. Its views (Canvas, Tests, Versions, The skill) are a choice of views; Copilot and Publish sit at its end.
- The canvas fills the rest. The steps are FlowNodes: the trigger, a model's forecast that reads, the step that orders more and changes purchase orders, the one that sends the order out by email, and the result.
- The step a person chose wears the focus ring. Its condition, "when days < 5", sits on the curve into it, and a dashed curve shows what its expressions read: the run's input.
- The last test's path is green, each step ticked. Tests run against the mocks of their cases, in the personal tier, and change no system.
- Its one thing to do is in the middle at the foot, as n8n has it: Run the tests. Zooming is at the left of the foot; adding a step at the canvas's top right.
- The canvas or its list is a choice of views at the right of the foot (FlowList). A narrow screen starts with the list.
- In a product whose pages have its sidebar, such as a5s's draft, the workbench takes the whole window (`wb window`): the sidebar shrinks to the rail, and the work sits beside it (`wb-main`). On a phone, the rail is a row of icons above it.
- The inspector says what the last change made follow, at its top until the next (`wb-well notice`), and sets its parts apart with a line (`wb-section`). A badge that opens what it counts, such as a draft's problems, is a button.
- Its buttons are compact until density is a layer of tokens. That's a default each piece's own rule overrides, so a step's box, a list's row, a badge and a link keep their own size and padding.

The words are a7c's own (`apps/web/src/messages.ts`). The preview is a static rendition, at a desktop's size.
