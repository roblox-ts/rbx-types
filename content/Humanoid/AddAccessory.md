![A humanoid with an accessory that was attached using AddAccessory][1]

AddAccessory is a function that attaches the specified `Accessory` to the `Humanoid`.

## How are Accessories attached to Humanoids?

![Attachments that share the same name, and thus are used to connect the accessory.][2]

The `Accessory` is parented to the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) parent and then attached.

An `Accessory` is attached to the character by searching for an `Attachment` in the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) parent that shares the same name as an `Attachment` in the accessory's *Handle* `Part`. If one is found, the *Handle* part will be connected to the parent of the `Attachment` using a `Weld`. This weld will be configured so the [Attachments](https://developer.roblox.com/api-reference/class/Attachment) occupy the same space.

If the required `Attachment` can not be found, then the `Accessory` will remain parented to the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) parent but it will be unattached.

[1]: https://developer.roblox.com/assets/5aae3895c7db666d0b74b15a/AddAccessory.png

[2]: https://developer.roblox.com/assets/5aae3cca23d67a790b463318/AccessoryAttachment.png
@param accessory The `Accessory` to be attached