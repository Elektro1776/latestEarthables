define('ghost-admin/utils/editor-shortcuts', ['exports', 'ghost-admin/utils/ctrl-or-cmd'], function (exports, _ghostAdminUtilsCtrlOrCmd) {

  var shortcuts = {};

  // Markdown Shortcuts

  // Text
  shortcuts['ctrl+alt+u'] = { action: 'editorShortcut', options: { type: 'strike' } };
  shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+b'] = { action: 'editorShortcut', options: { type: 'bold' } };
  shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+i'] = { action: 'editorShortcut', options: { type: 'italic' } };

  shortcuts['ctrl+u'] = { action: 'editorShortcut', options: { type: 'uppercase' } };
  shortcuts['ctrl+shift+u'] = { action: 'editorShortcut', options: { type: 'lowercase' } };
  shortcuts['ctrl+alt+shift+u'] = { action: 'editorShortcut', options: { type: 'titlecase' } };
  shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+shift+c'] = { action: 'editorShortcut', options: { type: 'copyHTML' } };
  shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+h'] = { action: 'editorShortcut', options: { type: 'cycleHeaderLevel' } };

  // Formatting
  shortcuts['ctrl+q'] = { action: 'editorShortcut', options: { type: 'blockquote' } };
  shortcuts['ctrl+l'] = { action: 'editorShortcut', options: { type: 'list' } };

  // Insert content
  shortcuts['ctrl+shift+1'] = { action: 'editorShortcut', options: { type: 'currentDate' } };
  shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+k'] = { action: 'editorShortcut', options: { type: 'link' } };
  shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+shift+i'] = { action: 'editorShortcut', options: { type: 'image' } };
  shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+shift+k'] = { action: 'editorShortcut', options: { type: 'code' } };

  exports['default'] = shortcuts;
});
// # Editor shortcuts
// Loaded by gh-editor component
// This map is used to ensure the right action is called by each shortcut