# Workbench

a7c's builder, in Ocean: where people build a skill, the whole window given to the canvas, the way n8n's editor is. A showcase page, proposed.

- A rail of a7c's pages on the left, its mark on top: the frame's sidebar, shrunk to its icons.
- The toolbar says which skill this is, what the draft is (a draft of version 3, at revision 12), the tier it runs in, whether it's saved, and its problems. Its views (Canvas, Tests, Versions, The skill) are a choice of views; Copilot and Publish sit at its end.
- The canvas fills the rest. The steps are FlowNodes: the trigger, a model's forecast that reads, the step that orders more and changes purchase orders, the one that sends the order out by email, and the result.
- The step a person chose wears the focus ring. Its condition, "when days < 5", sits on the curve into it, and a dashed curve shows what its expressions read: the run's input.
- The last test's path is green, each step ticked. Tests run against the mocks of their cases, in the personal tier, and change no system.
- Its one thing to do is in the middle at the foot, as n8n has it: Run the tests. Zooming is at the left of the foot; adding a step at the canvas's top right.
- The canvas or its list is a choice of views at the right of the foot (FlowList). A narrow screen starts with the list.

The words are a7c's own (`apps/web/src/messages.ts`). The preview is a static rendition, at a desktop's size.
